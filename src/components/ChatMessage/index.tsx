import React, { createElement, useMemo } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';

const ChatMessage: React.FC<IProps> = ({ message }) => {
  const user = useAppSelector((state) => state.user);

  const isCurrentUserMessage = useMemo(
    () => message.idUser === user.id,
    [message.idUser, user.id],
  );
  const viewProps: IViewProps = { message, isCurrentUserMessage };

  return createElement(View, viewProps);
};

export default ChatMessage;
