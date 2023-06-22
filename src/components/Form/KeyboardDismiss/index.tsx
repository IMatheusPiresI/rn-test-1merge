import React, { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type IProps = {
  children: ReactNode;
};
export const KeyboardDismiss: React.FC<IProps> = ({ children }) => (
  <TouchableWithoutFeedback touchSoundDisabled onPress={Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);
