import React, { createElement } from 'react';
import { IViewProps } from './types';

import View from './view';
import { useAppDispatch } from '@store/index';
import { userChangeSelectedCommunity } from '@store/user/slice';
import { useNavigation } from '@react-navigation/native';

const Community: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleSelectCommunity = (id: string, name: string) => {
    dispatch(userChangeSelectedCommunity({ id, name }));
    navigation.navigate('Chats');
  };

  const viewProps: IViewProps = {
    handleSelectCommunity,
  };

  return createElement(View, viewProps);
};

export default Community;
