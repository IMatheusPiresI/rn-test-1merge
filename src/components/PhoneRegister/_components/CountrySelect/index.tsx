import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const CountrySelect: React.FC<IProps> = ({ handleSelect }) => {
  const viewProps: IViewProps = {
    handleSelect,
  };

  return createElement(View, viewProps);
};
