import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import InputBox from '../../components/Inputbox/InputBox';
import Button from '../../components/button/Button';
import Toast from 'react-native-simple-toast';
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { forgotPassword } from '../../redux/slicers/authSlice/actions';
import { ForgotPasswordScreenNavigationProp } from '../../navigation/type';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style'

const ForgetPassword = ({ navigation }: ForgotPasswordScreenNavigationProp) => {
  const [inputs, setInputs] = useState({ email: '' });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector((state) => state.auth);

  const handleBack = () => {
    navigation.navigate('Login');
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: string | null, input: string) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const validate = () => {
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      handleError('Please input a valid email', 'email');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (validate() && !isLoading) {
      try {
        const resultAction = await dispatch(forgotPassword(inputs.email));
        console.log(resultAction);
        if (forgotPassword.fulfilled.match(resultAction)) {
          Toast.show('New password sent on email', Toast.SHORT);
        } else {
          Toast.show('Enter a registered email', Toast.SHORT);
        }
      } catch (error) {
        Toast.show('An error occurred. Please try again.', Toast.SHORT);
      }
    } else {
      Toast.show('Enter a valid email', Toast.SHORT);
    }
  };

  return (
    <LinearGradient
      colors={['#613338', '#613338', '#3D2749']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <TouchableOpacity onPress={handleBack} style={styles.backIconContainer}>
        <Ionicons name={'arrow-back'} style={styles.backIcon} size={30} />
      </TouchableOpacity>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Forgot Password</Text>
      </View>

      <View style={styles.instruction}>
        <Text style={styles.textStyle}>
          Enter your email for verification process.
        </Text>
        <Text style={styles.textStyle}>
          We will mail you the new password.
        </Text>
      </View>
      <View style={styles.container}>
        <InputBox
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Email address"
          error={errors.email}
          placeholderTextColor={'grey'}
        />

        <Button 
          title={isLoading ? 'Submitting' : 'Submit'} 
          onPress={handleSubmit} 
          // disabled={isLoading} 
        />
      </View>
    </LinearGradient>
  );
};

export default ForgetPassword;
