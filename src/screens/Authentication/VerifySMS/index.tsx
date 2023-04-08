import React, { createElement } from 'react';
import 'react-native-gesture-handler';

import View from './view';
import { IViewProps } from './types';
import { useNavigation } from '@react-navigation/native';

export const VerifySMS: React.FC = () => {
  const navigation = useNavigation();

  const handleConfirmPhone = () => {
    navigation.navigate('AppRoutes');
  };

  const viewProps: IViewProps = {
    handleConfirmPhone,
  };

  return createElement(View, viewProps);
};

export default VerifySMS;
