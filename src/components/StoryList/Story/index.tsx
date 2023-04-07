import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';

export const Story: React.FC<IProps> = ({ story }) => {
  const user = useAppSelector((state) => state.user);

  const isCurrentUser = story.idUser === user.id;
  const [firstName, secondName] = story.name.split(' ');

  const viewProps: IViewProps = {
    firstName,
    secondName,
    imageUrl: story.photo,
    isCurrentUser,
  };

  return createElement(View, viewProps);
};
