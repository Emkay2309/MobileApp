import { useContext, useEffect, useState } from 'react';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './type';
import { useAppSelector } from '../redux/store/store';
import { Button } from 'react-native';
import Login from '../screens/login';
import Onboard from '../screens/onboard';
import Signup from '../screens/signup';
import ForgetPassword from '../screens/forget';
import { AuthContext, AuthProvider } from './helpers/AuthProvider';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { isLogged } = useContext(AuthContext) as { isLogged: boolean };

    let routeName: keyof RootStackParamList = 'Onboard';
    const [isFirstLaunch, setIsFirstLaunch] = useState(-1);
    const authState = useAppSelector(state => state.auth);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
                if (alreadyLaunched === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true');
                    setIsFirstLaunch(0);
                } else {
                    setIsFirstLaunch(1);
                }
            } catch (error) {
                console.error('Error checking first launch:', error);
            }
        };

        checkFirstLaunch();
    }, []);

    console.log(isFirstLaunch);

    if (isFirstLaunch === -1) {
        return null;
    } else if (isFirstLaunch === 0) {
        routeName = 'Onboard';
    } else if (authState.user === null && isFirstLaunch === 1) {
        routeName = 'Login';
    } else if (authState.user?.data?.access_token) {
        routeName = 'TabNav';
    }

    return (
        <Stack.Navigator
            initialRouteName={'TabNav'}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Onboard" component={Onboard} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Gilroy-Bold',
                        color: 'white',
                        fontSize: 20,
                    },
                    headerTitle: 'Forgot Password',
                    headerLeft: () => (
                        <Button
                            title="back"
                            onPress={() => navigation.navigate('Login')}
                            color="white"
                        />
                    ),
                }}
                name="ForgotPassword"
                component={ForgetPassword}
            />
                {/* <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/> */}
                <Stack.Screen name="TabNav" component={TabNavigator} />
            
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
