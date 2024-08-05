
import {InputModeOptions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../generic/CustomInput';


interface IInputWithError {
  placeholder: string;
  maxLength: number;
  inputMode: InputModeOptions | undefined;
  icon: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  validator: Function;
  showErr: boolean;
  errorText: string;
  samePass?: boolean;
  spacesAllowed?: boolean;
}


const CustomInputError = ({
  placeholder,
  maxLength,
  inputMode,
  icon,
  onChangeText,
  value,
  validator,
  showErr,
  errorText,
  samePass,
  spacesAllowed = false,
}: IInputWithError) => {
  const [err, setErr] = useState('');
  const [inputText, setInputText] = useState(value);

  useEffect(() => {
    if (placeholder === 'Confirm Password') {
      // console.log('Validator fn-______', validator());
      if (validator()) {
        setErr('');
      } else {
        setErr(errorText);
      }
    } else {
      if (validator(inputText)) {
        setErr('');
      } else {
        setErr(errorText);
      }
    }
  }, [samePass, inputText]);

  function handler(text: string) {
    if (spacesAllowed) {
      onChangeText(text);
      setInputText(text);
    } else {
      onChangeText(text.trim());
      setInputText(text.trim());
    }
  }

  return (
    <View style={styles.elementView}>
      <CustomInput
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        onChangeText={handler}
        icon={icon}
        value={value}
      />
      {(value === '' && showErr) || (showErr && err !== '') ? (
        <Text style={styles.errorStyle}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default CustomInputError;

const styles = StyleSheet.create({
  elementView: {
    paddingHorizontal: 10,
  },
  errorStyle: {
    color: 'red',
    paddingHorizontal: 5,
  },
});
