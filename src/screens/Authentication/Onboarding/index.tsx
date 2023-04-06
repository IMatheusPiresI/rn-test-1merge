import React, { createElement } from 'react';
import 'react-native-gesture-handler';

import View from './view';
import { IViewProps } from './types';
import { useNavigation } from '@react-navigation/native';

export const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  const handleGoToVerifySMS = () => {
    navigation.navigate('VerifySMS');
  };

  const viewProps: IViewProps = {
    handleGoToVerifySMS,
  };

  return createElement(View, viewProps);
};

export default Onboarding;
