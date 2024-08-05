import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import CartScreen from '../screens/cart';


const Stack = createNativeStackNavigator<RootStackParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator

