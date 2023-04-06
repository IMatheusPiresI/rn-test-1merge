import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const Post: React.FC<IProps> = ({ data }) => {
  const viewProps: IViewProps = { data };

  return createElement(View, viewProps);
};
