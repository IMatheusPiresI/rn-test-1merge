import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

const CardCommunity: React.FC<IProps> = ({ data, ...rest }) => {
  const viewProps: IViewProps = { data, ...rest };

  return createElement(View, viewProps);
};

export default CardCommunity;
