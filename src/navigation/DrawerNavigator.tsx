import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from "../screens/dashboard";
import { RootStackParamList } from "./type";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: '#eaeaea',
          width: 300,
        },
        // headerShown : false
      }}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator



