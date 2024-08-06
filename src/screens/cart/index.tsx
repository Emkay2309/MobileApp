import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppDispatch, RootState } from '../../redux/store/store';
import { getCartList } from '../../redux/slicers/cartSlice/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);
  console.log(cart);

  console.log(accessToken);

  
  useEffect(() => {
    if (accessToken) {
      dispatch(getCartList({ access_token : accessToken }));
    }
  }, [dispatch, accessToken]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // if(cart === null) {
  //   return (
  //     <View style={styles.nullCon}>
  //       <Text style={styles.nullText}>No items in the cart</Text>
  //     </View>
  //   )
  // }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cart?.data?.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.product.product_images }} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productPrice}>${item.product.cost.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityBtn}
                  // onPress={() => handleDecreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityBtn}
                  // onPress={() => handleIncreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${cart?.total.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  nullCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nullText: {
    fontSize: 30,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    gap : 70
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    objectFit : 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityBtn: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius : 20,
  },
  totalText: {
    color: 'white',
    fontSize: 18,
  },
  btn: {
    backgroundColor: 'lightpink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});