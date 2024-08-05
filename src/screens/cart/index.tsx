import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootState } from '../../redux/store/store';
import { getCartList } from '../../redux/slicers/cartSlice/actions';

const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const accessToken = useSelector((state: RootState) => state.auth.user?.data?.access_token);
  console.log(cart);

  // useEffect(() => {
  //   if (accessToken) {
  //     dispatch(getCartList({ access_token: accessToken }));
  //   }
  // }, [dispatch, accessToken]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {cart?.data?.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.product.name}</Text>
            <Text style={styles.cartItemText}>${item.product.cost.toFixed(2)}</Text>
            <Text style={styles.cartItemText}>Qty: {item.quantity}</Text>
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
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
  },
  totalContainer: {
    height: 80,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
