import React, { useState } from 'react';
import { Alert, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputBox from '../../components/Inputbox/InputBox';
import Loader from '../../components/loader/Loader';
import Button from '../../components/button/Button';
import RadioButton from '../../components/radioButton/Radio';
import COLORS from '../../assets/colors';
import { SignupScreenNavigationProp } from '../../navigation/type';
import { useAppDispatch } from '../../redux/store/store';
import { registerUser } from '../../redux/slicers/authSlice/actions';
import { IRegistrationFormData } from '../../redux/slicers/authSlice/type';

const Signup = ({ navigation }: SignupScreenNavigationProp) => {
  const dispatch = useAppDispatch();
  const formData : IRegistrationFormData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: 'male',
    phone_no: '',
  };

  const [inputs, setInputs] = useState(formData);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    setErrors({}); // Clear previous errors

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      handleError('Please enter a valid email address', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Password must be at least 8 characters', 'password');
      isValid = false;
    } else if (!/[A-Z]/.test(inputs.password)) {
      handleError('Password must contain at least one uppercase letter', 'password');
      isValid = false;
    } else if (!/[a-z]/.test(inputs.password)) {
      handleError('Password must contain at least one lowercase letter', 'password');
      isValid = false;
    } else if (!/[0-9]/.test(inputs.password)) {
      handleError('Password must contain at least one number', 'password');
      isValid = false;
    } else if (!/[!@#$%^&*]/.test(inputs.password)) {
      handleError('Password must contain at least one special character', 'password');
      isValid = false;
    }

    if (inputs.confirm_password !== inputs.password) {
      handleError('Passwords do not match', 'confirm_password');
      isValid = false;
    }

    if (!inputs.first_name) {
      handleError('Please enter your first name', 'first_name');
      isValid = false;
    } else if (/[^a-zA-Z]/.test(inputs.first_name)) {
      handleError('First name should contain only letters', 'first_name');
      isValid = false;
    }

    if (!inputs.last_name) {
      handleError('Please enter your last name', 'last_name');
      isValid = false;
    } else if (/[^a-zA-Z]/.test(inputs.last_name)) {
      handleError('Last name should contain only letters', 'last_name');
      isValid = false;
    }

    if (!inputs.phone_no) {
      handleError('Please enter your phone number', 'phone_no');
      isValid = false;
    } else if (!/^\d{10}$/.test(inputs.phone_no)) {
      handleError('Please enter a valid 10-digit phone number', 'phone_no');
      isValid = false;
    }

    console.log('valid--> ', isValid);
    console.log(inputs);
    if (isValid) {
      Signup(inputs);
    }
  };

  const Signup = async (inputs: IRegistrationFormData) => {
    console.log('--------------')
    console.log(inputs)
    try {
      const val = await dispatch(registerUser(inputs)).unwrap();
      
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOnchange = (text: string, input: any) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: string | null, input: any) => {
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
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.inputContainer}>
              <InputBox
                onChangeText={text => handleOnchange(text, 'first_name')}
                onFocus={() => handleError(null, 'first_name')}
                iconName="account-outline"
                placeholder="Enter your first name"
                error={errors.first_name}
              />
              <InputBox
                onChangeText={text => handleOnchange(text, 'last_name')}
                onFocus={() => handleError(null, 'last_name')}
                iconName="account-outline"
                placeholder="Enter your last name"
                error={errors.last_name}
              />
              <InputBox
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                iconName="email-outline"
                placeholder="Enter your email address"
                error={errors.email}
              />
              <InputBox
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'password')}
                iconName="lock-outline"
                placeholder="Enter your password"
                error={errors.password}
                password
              />
              <InputBox
                onChangeText={text => handleOnchange(text, 'confirm_password')}
                onFocus={() => handleError(null, 'confirm_password')}
                iconName="lock-outline"
                placeholder="Confirm your password"
                error={errors.confirm_password}
                password
              />
              <View style={styles.genderContainer}>
                <Text style={styles.genderLabel}>Gender:</Text>
                <RadioButton
                  selected={inputs.gender === 'male'}
                  onPress={() => handleOnchange('male', 'gender')}
                  label="Male"
                />
                <View style={styles.radContainer}>
                  <RadioButton
                    selected={inputs.gender === 'female'}
                    onPress={() => handleOnchange('female', 'gender')}
                    label="Female"
                  />
                </View>
              </View>
              <InputBox
                onChangeText={text => handleOnchange(text, 'phone_no')}
                onFocus={() => handleError(null, 'phone_no')}
                iconName="phone"
                placeholder="Enter phone number"
                error={errors.phone_no}
              />
              <View style={styles.footer}>
                <Button title="Sign up" onPress={validate} />
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={styles.registerText}
                >
                  Already a user? Login
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {loading && <Loader />}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: 18,
  },
  inputContainer: {
    marginVertical: 1,
  },
  radContainer: {},
  registerText: {
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  gradient: {
    flex: 1,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    height: 55,
    backgroundColor: '#574c5c',
    marginTop: 22,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'white',
  },
  genderLabel: {
    color: COLORS.black,
    fontSize: 18,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioButtonSelected: {
    backgroundColor: COLORS.black,
  },
  radioButtonLabel: {
    color: COLORS.black,
    fontSize: 16,
  },
});

export default Signup;
