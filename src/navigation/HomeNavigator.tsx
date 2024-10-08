import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import HomeScreen from '../screens/home/HomeScreen';
import CartNavigator from './CartNavigator';
import CategoryList from '../screens/category';
import ProductScreen from '../screens/product';
import Dashboard from '../screens/dashboard';
import OrderList from '../screens/order/orderList';
import CartScreen from '../screens/cart';
import OrderDetail from '../screens/order/orderDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Category' component={CategoryList} />
        <Stack.Screen name='ProductDetail' component={ProductScreen} />
        <Stack.Screen name="CartNavigator"component={CartNavigator} />
        <Stack.Screen name='OrderList' component={OrderList} />
        <Stack.Screen name='OrderDetail' component={OrderDetail} />
        <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator

