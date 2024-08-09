// Navigator.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import SplashScreen from '../screens/splash';

const CheckNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(true);
    //const [showSplash, setShowSplash] = useState(true);

    const checkIfLoggedIn = async () => {
        const token = await AsyncStorage.getItem('access_token');
        console.log(token)
        if (token) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        const checkAuthStatus = async () => {
            const loggedIn = await checkIfLoggedIn();
            setIsLoggedIn(loggedIn);
        };

        checkAuthStatus();
    }, []);

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default CheckNavigator;
