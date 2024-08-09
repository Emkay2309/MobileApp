import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppDispatch, RootState } from '../../redux/store/store';
import { addToCart, editCart, getCartList } from '../../redux/slicers/cartSlice/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {styles} from './style'

const CartScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AddressList'>>();
  
  // console.log(accessToken);

  const handleAddress = () => {
    navigation.navigate('AddressList');
  }

  const handleAdd = async (id : number , quantity : number) => {
    try {
      console.log('add to cart start');
      console.log('sending product -->', 'id : ' , id , "quantity :" , quantity );
      await dispatch(
        editCart({
          access_token: accessToken,
          product_id: id,
          quantity: quantity,
        }),
      ).unwrap();
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleSub = async (id : number , quantity : number) => {
    try {
      console.log('add to cart start',accessToken)
      await dispatch(
        editCart({
          access_token: accessToken,
          product_id: id,
          quantity: quantity,
        }),
      ).unwrap();

    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (accessToken) {
      const response = dispatch(getCartList({ access_token: accessToken })).unwrap();
      //console.log('cart reponse -->' ,response);
    }
  }, [dispatch, accessToken]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if(cart === undefined|| cart?.data === null) {
    return (
      <View style={styles.nullCon}>
        <Text style={styles.nullText}>No items in the cart</Text>
      </View>
    )
  }

  //console.log(cart);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cart?.data?.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.product.product_images }} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productPrice}>${item.product.cost}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityBtn}
                  onPress={() => handleAdd(item.id , item.quantity-1)}
                >
                  <Text style={styles.quantityBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityBtn}
                onPress={() => handleSub(item.id , item.quantity+1 )}
                >
                  <Text style={styles.quantityBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${cart?.total?.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => handleAddress()} style={styles.btn}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;


