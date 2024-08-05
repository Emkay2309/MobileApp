import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import COLORS from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps extends TextInputProps {
  label?: string;
  iconName: string;
  error : string | null;
  password?: boolean;
  onFocus?: () => void;
}

const InputBox: React.FC<InputProps> = ({ label, iconName, error, password, onFocus = () => {}, ...props }) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom : 4}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error ? COLORS.red : isFocused ? COLORS.darkBlue : 'white',
            alignItems: 'center',
          },
        ]}
      >
        <Icon name={iconName} style={{ color: 'black', fontSize: 25, marginRight: 10 }} />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: 'white', flex: 1 ,fontSize :15}}
          {...props}
        />

        <TextInput />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline' }
            style={{ color: COLORS.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 15 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 1,
    fontSize: 20,
    fontWeight : '700',
    color: '#898989',
  },
  inputContainer: {
    height: 55,
    backgroundColor : '#574c5c',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius : 10
  },
});

export default InputBox;
