import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import '../theme/theme'

const Button = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
  size,
  type,
}) => {
  const buttonType = {
    primary: {
      backgroundColor: 'darkgrey',
      color: '#fff',
    },
    secondary: {
      backgroundColor: 'colors.primary',
      color: 'white',
    },
    tertiary: {
      backgroundColor: 'white',
      color: '#000',
    },
  };

  const buttonSize = {
    large: {
      width: 200,
      height: 40,
    },
    medium: {
      width: 150,
      height: 30,
    },
    small: {
      width: 100,
      height: 20,
    },
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonSize[size],
        buttonType[type],
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;

