import React, { createElement, useMemo } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';

export const CardChatMessage: React.FC<IProps> = ({ data, ...rest }) => {
  const user = useAppSelector((state) => state.user);
  const lastMessage = useMemo(() => {
    const totalMessages = data.messages.length;

    const last = data.messages[totalMessages - 1];

    return last;
  }, [data.messages]);

  const showIcon = lastMessage.idUser === user.id;

  const viewProps: IViewProps = { data, lastMessage, showIcon, ...rest };

  return createElement(View, viewProps);
};
