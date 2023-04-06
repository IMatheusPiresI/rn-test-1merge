import React, { createElement, useMemo } from 'react';
import View from './view';
import { IViewProps } from './types';
import { mockPosts } from '@mocks/mockPosts';
import { useAppSelector } from '@store/index';

export const Posts: React.FC = () => {
  const { selectedCommunity } = useAppSelector((state) => state.user);
  const communityPosts = useMemo(() => {
    const posts = mockPosts.filter(
      (post) => post.idCommunity === selectedCommunity.id,
    );

    return posts;
  }, [selectedCommunity.id]);
  const viewProps: IViewProps = {
    communityPosts,
  };

  return createElement(View, viewProps);
};

export default Posts;
