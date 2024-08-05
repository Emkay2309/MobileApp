import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../../assets/colors';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 300,
    backgroundColor: COLORS.lightpink,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius  : 20
  },
  buttonText: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Button;
