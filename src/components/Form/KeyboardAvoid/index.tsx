import { KeyboardAvoidingView } from 'native-base';
import React, { ReactNode } from 'react';
import { Platform } from 'react-native';

type IProps = {
  children: ReactNode;
};
export const KeyboardAvoid: React.FC<IProps> = ({ children }) => (
  <KeyboardAvoidingView
    flex={1}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    {children}
  </KeyboardAvoidingView>
);
