import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const HeaderPost: React.FC<IProps> = ({ name, photoUser }) => {
  const viewProps: IViewProps = {
    name,
    photoUser,
  };

  return createElement(View, viewProps);
};
