import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { IProps } from './types';

export const KeyboardDismiss: React.FC<IProps> = ({
  children,
  customOnPress,
}) => (
  <TouchableWithoutFeedback
    onPress={customOnPress ? customOnPress : Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);
