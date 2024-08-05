import React, { useState } from 'react';
import { LoginScreenNavigationProp } from '../../navigation/type';
import InputBox from '../../components/Inputbox/InputBox';
import COLORS from '../../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/button/Button';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { signInUser } from '../../redux/slicers/authSlice/actions';

export interface LoginType {
    email: string;
    password: string;
}

const Login = ({ navigation }: LoginScreenNavigationProp) => {
    const [inputs, setInputs] = useState<LoginType>({ email: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const login = async () => {
        try {
          setLoading(true);
          const response = await dispatch(signInUser(inputs)).unwrap();
          await AsyncStorage.setItem('access_token', response.data.access_token);
          console.log(response);
          navigation.navigate('TabNav');
          setLoading(false);
        } catch (error) {
          console.error('Login failed', error);
        } finally {
          setLoading(false);
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

                        <View style={styles.footer}>
                            <Button title={loading === true ? "Loading" : "Log In"} onPress={login} />
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

const styles = StyleSheet.create({
    inputs: {
        marginTop: 20
    },
    safeArea: {
        flex: 1,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'center',

    },
    footer: {
        marginTop: 140,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: COLORS.black,
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle: {
        color: COLORS.grey,
        fontSize: 18,
        marginVertical: 10,
    },
    inputContainer: {
        marginVertical: 20,

    },
    registerText: {
        color: COLORS.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    gradient: {
        flex: 1
    },
});



export default Login;