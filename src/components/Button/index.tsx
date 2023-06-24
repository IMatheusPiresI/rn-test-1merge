import { Text } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type IProps = {
  title: string;
} & TouchableOpacityProps;

export const Button: React.FC<IProps> = ({ title, disabled, ...rest }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    {...rest}
    style={[styles.button, disabled && styles.buttonDisabled]}
  >
    <Text
      fontFamily="poppins"
      fontWeight="medium"
      fontSize={14}
      lineHeight={20}
      color="#FFFFFF"
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#000113',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#6e6f79',
    opacity: 0.8,
  },
});
