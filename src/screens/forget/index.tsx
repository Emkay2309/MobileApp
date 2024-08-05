import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import InputBox from '../../components/Inputbox/InputBox'
import Button from '../../components/button/Button'

const ForgetPassword = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error: string | null, input: string) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (

    <LinearGradient
      colors={['#613338', '#613338', '#3D2749']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
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

        />

        <Button title='Submit' onPress={() => { }} />
      </View>


    </LinearGradient>


  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  headingContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',

  },
  instruction : {
    
  },
  textStyle : {

  },
  headingText: {
    fontSize: 40,
    fontWeight: '700'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    //marginHorizontal : 20,
    marginTop: 50
  }
})