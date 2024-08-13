import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, FlatList, Text, TouchableOpacity, View, ListRenderItem } from 'react-native';
import { AppDispatch, RootState } from '../../redux/store/store';
import { editCart, getCartList, deleteCart } from '../../redux/slicers/cartSlice/actions'; // Import deleteCart action
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../../navigation/type';
import { ICartItem } from '../../redux/slicers/cartSlice/type';
import CartItemShimmer from './shimmer/CartItemShimmer';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AddressList'>>();

  const [localCart, setLocalCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getCartList({ access_token: accessToken }))
        .unwrap()
        .then((result) => {
          setLocalCart(result.data); // Set the local cart data after fetching it
        });
    }
  }, [dispatch, accessToken]);

  const handleAddress = () => {
    navigation.navigate('AddressList');
  };

  const handleCount = async (id: number, quantity: number) => {
    try {
      if (quantity === 0) {
        // If quantity is 0, remove the item from the cart
        await dispatch(
          deleteCart({
            access_token: accessToken,
            product_id: id,
          }),
        ).unwrap();

        // Update local state to remove the item
        setLocalCart((prevCart) => prevCart.filter((item) => item.product_id !== id));
      } else {
        // Otherwise, update the quantity
        await dispatch(
          editCart({
            access_token: accessToken,
            product_id: id,
            quantity: quantity,
          }),
        ).unwrap();

        // Update local state to reflect the new quantity
        setLocalCart((prevCart) =>
          prevCart.map((item) =>
            item.product_id === id ? { ...item, quantity: quantity } : item,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <FlatList
        data={Array.from({ length: 5 })} // Display 5 shimmer items
        renderItem={() => <CartItemShimmer />}
        keyExtractor={(_, index) => `shimmer-${index}`}
        contentContainerStyle={styles.scrollContainer}
      />
    );
  }

  if (!localCart.length) {
    return (
      <View style={styles.nullCon}>
        <MaterialCommunityIcons name="cart" color={'black'} size={300} style={styles.cartIcon} />
        <Text style={styles.nullText}>Empty Cart</Text>
      </View>
    );
  }

  const renderItem: ListRenderItem<ICartItem> = ({ item }) => (
    <View key={item.id} style={styles.cartItem}>
      <Image source={{ uri: item.product.product_images }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.productPrice}>${item.product.cost}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityBtn}
            onPress={() => handleCount(item.product_id, item.quantity - 1)}
          >
            <Text style={styles.quantityBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityBtn}
            onPress={() => handleCount(item.product_id, item.quantity + 1)}
          >
            <Text style={styles.quantityBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <View style={{flex : 1}}>
        <FlatList
          data={localCart} 
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${cart?.total?.toFixed(2)}</Text>
        <TouchableOpacity onPress={handleAddress} style={styles.btn}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
