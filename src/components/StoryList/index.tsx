import React, { createElement, useMemo } from 'react';
import { IProps, IStory, IViewProps } from './types';

import View from './view';
import { mockStorys } from '@mocks/mockStorys';
import { useAppSelector } from '@store/index';

export const StoryList: React.FC<IProps> = () => {
  const user = useAppSelector((state) => state.user);

  const storyList: IStory[] = useMemo(() => {
    const myStory = mockStorys.find((story) => story.idUser === user.id);
    if (!myStory) return [] as IStory[];

    const filteredList: IStory[] = mockStorys.filter(
      (story) => story.idUser !== myStory.idUser,
    );
    const storyListWithUserFirst: IStory[] = [
      { ...myStory, name: 'Seu Story' },
      ...filteredList,
    ];
    return storyListWithUserFirst;
  }, [user.id]);

  const viewProps: IViewProps = { storyList };

  return createElement(View, viewProps);
};
