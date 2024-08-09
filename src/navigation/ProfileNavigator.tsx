import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import ProfileScreen from '../screens/profile';
import ProfileMainScreen from '../screens/profile/profilemain/ProfileMainScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='ProfileMain' component={ProfileMainScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator

