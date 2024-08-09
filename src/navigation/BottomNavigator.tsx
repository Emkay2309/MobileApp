import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabNavScreenNavigationProp, RootStackParamList } from './type'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';
import Dashboard from '../screens/dashboard';
import ProfileScreen from '../screens/profile';
import CartScreen from '../screens/cart';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigator = ({ navigation }: BottomTabNavScreenNavigationProp) => {
  return (
    <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown : false
            }}
        >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})