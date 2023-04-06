import React, { createElement, useMemo } from 'react';
import { IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';
import { mockChats } from '@mocks/mockChats';

const Chats: React.FC = () => {
  const { selectedCommunity } = useAppSelector((state) => state.user);

  const chats = useMemo(() => {
    const community = mockChats.find(
      (chat) => chat.idCommunity === selectedCommunity.id,
    );

    if (!community) return [];
    return community.chats;
  }, [selectedCommunity.id]);

  const viewProps: IViewProps = {
    chats,
  };

  return createElement(View, viewProps);
};

export default Chats;
