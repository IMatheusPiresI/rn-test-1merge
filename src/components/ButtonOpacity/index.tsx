import React from 'react';
import { IProps } from './types';
import { StyleSheet, TouchableOpacity } from 'react-native';

const ButtonOpacity: React.FC<IProps> = ({ children, ...rest }) => (
  <TouchableOpacity style={styles.container} {...rest}>
    {children}
  </TouchableOpacity>
);

export default ButtonOpacity;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
