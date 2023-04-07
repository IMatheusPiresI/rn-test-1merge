import React, { createElement, useMemo } from 'react';
import { IChat, IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';
import { mockChats } from '@mocks/mockChats';
import { useNavigation } from '@react-navigation/native';

const AllChats: React.FC = () => {
  const navigation = useNavigation();
  const { selectedCommunity } = useAppSelector((state) => state.user);

  const chats = useMemo(() => {
    const community = mockChats.find(
      (chat) => chat.idCommunity === selectedCommunity.id,
    );

    if (!community) return [];
    return community.chats;
  }, [selectedCommunity.id]);

  const handleOpenChat = (chat: IChat) => {
    navigation.navigate('Chat', { chat });
  };

  const viewProps: IViewProps = {
    chats,
    handleOpenChat,
  };

  return createElement(View, viewProps);
};

export default AllChats;
