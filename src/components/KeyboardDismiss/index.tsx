import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { IProps } from './types';

export const KeyboardDismiss: React.FC<IProps> = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
    {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
