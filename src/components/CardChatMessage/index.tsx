import React, { createElement, useMemo } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const CardChatMessage: React.FC<IProps> = ({ data, ...rest }) => {
  const lastMessage = useMemo(() => {
    const totalMessages = data.messages.length;

    const last = data.messages[totalMessages - 1];

    return last;
  }, [data.messages]);

  const viewProps: IViewProps = { data, lastMessage, ...rest };

  return createElement(View, viewProps);
};
