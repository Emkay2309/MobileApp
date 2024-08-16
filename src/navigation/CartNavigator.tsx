import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import CartScreen from '../screens/cart';
import AddressList from '../screens/address/addressList';
import OrderScreen from '../screens/order/order';
import AddAddressScreen from '../screens/address/addAddress';


const Stack = createNativeStackNavigator<RootStackParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='AddressList' component={AddressList} />
        <Stack.Screen name='OrderScreen' component={OrderScreen} />
        <Stack.Screen name='AddAddress' component={AddAddressScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator

