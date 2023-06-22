import React, { createElement } from 'react';

import View from './view';
import { IIconsNames, IMaterialIconsType, IProps, IViewProps } from './types';

export const TabCustom: React.FC<IProps> = ({
  isFocused,
  routeName,
  ...rest
}) => {
  const iconsNames: IIconsNames = {
    Home: 'home',
    Saved: 'favorite-border',
    Settings: 'settings',
    Profile: 'person-outline',
  };

  const iconName: IMaterialIconsType =
    iconsNames[routeName as keyof typeof iconsNames];

  const viewProps: IViewProps = {
    iconName,
    isFocused,
    routeName,
    ...rest,
  };

  return createElement(View, viewProps);
};
