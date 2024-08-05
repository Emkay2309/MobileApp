import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList, TabNavScreenNavigationProp } from './type'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = ({ navigation }: TabNavScreenNavigationProp) => {
  return (
    <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown : false
            }}
        >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />

      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
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

export default TabNavigator

const styles = StyleSheet.create({})