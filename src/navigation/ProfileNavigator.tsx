import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import ProfileScreen from '../screens/profile';


const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator

