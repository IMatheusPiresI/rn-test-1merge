import React, { createElement } from 'react';

import View from './view';
import { IIconsNames, IMaterialIconsType, IProps, IViewProps } from './types';

export const TabCustom: React.FC<IProps> = ({
  isFocused,
  routeName,
  ...rest
}) => {
  const iconsNames: IIconsNames = {
    Community: 'device-hub',
    Chats: 'forum',
    Posts: 'home',
    Settings: 'settings',
  };

  const iconName: IMaterialIconsType =
    iconsNames[routeName as keyof typeof iconsNames];

  const viewProps: IViewProps = {
    iconName,
    isFocused,
    ...rest,
  };

  return createElement(View, viewProps);
};
