import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

const HeaderChat: React.FC<IProps> = () => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};

export default HeaderChat;
