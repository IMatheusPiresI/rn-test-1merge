import React, { createElement } from 'react';

import View from './view';
import { IProps, IViewProps } from './types';

export const InputSearch: React.FC<IProps> = ({ ...rest }) => {
  const viewProps: IViewProps = { ...rest };

  return createElement(View, viewProps);
};
