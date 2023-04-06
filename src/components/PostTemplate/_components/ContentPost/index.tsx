import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const ContentPost: React.FC<IProps> = ({ image, text }) => {
  const viewProps: IViewProps = {
    image,
    text,
  };

  return createElement(View, viewProps);
};
