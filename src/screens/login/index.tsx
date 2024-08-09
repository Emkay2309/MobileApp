import React, { useState } from 'react';
import { LoginScreenNavigationProp } from '../../navigation/type';
import InputBox from '../../components/Inputbox/InputBox';
import COLORS from '../../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/button/Button';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { signInUser } from '../../redux/slicers/authSlice/actions';
import { styles } from './style';
import Toast from 'react-native-simple-toast';

export interface LoginType {
    email: string;
    password: string;
}

const Login = ({ navigation }: LoginScreenNavigationProp) => {
    const [inputs, setInputs] = useState<LoginType>({ email: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const validate = () => {
        let valid = true;
        const newErrors: { [key: string]: string | null } = {};

        // Email validation
        if (!inputs.email) {
            newErrors.email = "Please input email";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            newErrors.email = "Please input a valid email";
            valid = false;
        }

        // Password validation
        if (!inputs.password) {
            newErrors.password = "Please input password";
            valid = false;
        } else if (inputs.password.length < 6) {
            newErrors.password = "Password should be at least 6 characters long";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const login = async () => {
        if (validate()) {
            try {
                setLoading(true);
                console.log('checkInput' , inputs)
                const response = await dispatch(signInUser(inputs)).unwrap();
                await AsyncStorage.setItem('access_token', response.data.access_token);
                console.log('response ---> ' , response);
                navigation.navigate('TabNav');


                setLoading(false);
            } catch (error : any ) {
                Toast.show(error.message || 'Enter correct email and password', Toast.SHORT);
            } finally {
                setLoading(false);
            }
        }
        else {
            Alert.alert('Invalid Email and password');
        }
    };

    const handleOnchange = (text: string, input: keyof LoginType) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error: string | null, input: keyof LoginType) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#613338', '#613338', '#3D2749']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.container}>
                    <View style={styles.heading}>
                        <Text style={styles.title}>NeoStore</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <View>

                            <View style={styles.inputs}>
                                <InputBox
                                    onChangeText={text => handleOnchange(text, 'email')}
                                    onFocus={() => handleError(null, 'email')}
                                    iconName="email-outline"
                                    label="Email"
                                    placeholder="Email address"
                                    error={errors.email}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <InputBox
                                    onChangeText={text => handleOnchange(text, 'password')}
                                    onFocus={() => handleError(null, 'password')}
                                    iconName="lock-outline"
                                    label="Password"
                                    placeholder="Enter password"
                                    error={errors.password}
                                    password
                                />
                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Button title={loading ? "Loading" : "Log In"} onPress={login} />
                            <Text
                                onPress={() => navigation.navigate('Signup')}
                                style={styles.registerText}
                            >
                                Don't have account? Register
                            </Text>
                            <Button title='Forgot Password' onPress={() => navigation.navigate('ForgotPassword')} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Login;

