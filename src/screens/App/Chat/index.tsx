import React, { createElement } from 'react';
import { IViewProps } from './types';

import View from './view';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IChat } from '../AllChats/types';

const Chat: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const { chat } = route.params as { chat: IChat };

  const viewProps: IViewProps = {
    chat,
    handleGoBack,
  };

  return createElement(View, viewProps);
};

export default Chat;
