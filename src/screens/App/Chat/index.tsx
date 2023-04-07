import React, { createElement } from 'react';
import { IViewProps } from './types';

import View from './view';
import { useRoute } from '@react-navigation/native';
import { IChat } from '../AllChats/types';

const Chat: React.FC = () => {
  const route = useRoute();
  const { chat } = route.params as { chat: IChat };

  console.log(chat);

  const viewProps: IViewProps = {
    chat,
  };

  return createElement(View, viewProps);
};

export default Chat;
