import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';
import { useAppSelector } from '@store/index';
export const TipCommunitySelected: React.FC<IProps> = () => {
  const {
    selectedCommunity: { name },
  } = useAppSelector((state) => state.user);
  const viewProps: IViewProps = {
    name,
  };

  return createElement(View, viewProps);
};
