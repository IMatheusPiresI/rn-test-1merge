import React, { createElement } from 'react';
import 'react-native-gesture-handler';

import View from './view';
import { IViewProps } from './types';
import { useNavigation } from '@react-navigation/native';

export const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  const handleGoToApp = () => {
    navigation.navigate('AppRoutes');
  };

  const viewProps: IViewProps = {
    handleGoToApp,
  };

  return createElement(View, viewProps);
};

export default Onboarding;
