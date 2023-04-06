import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const Story: React.FC<IProps> = ({ name, imageUrl }) => {
  const [firstName, secondName] = name.split(' ');

  const viewProps: IViewProps = {
    firstName,
    secondName,
    imageUrl,
  };

  return createElement(View, viewProps);
};
