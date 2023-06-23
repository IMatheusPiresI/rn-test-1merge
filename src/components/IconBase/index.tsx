import React from 'react';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IMaterialIconsType = keyof typeof MaterialIcons.glyphMap;

type IProps = {
  name: IMaterialIconsType;
  size?: number;
  isFocused?: boolean;
  color?: string;
  colorFocused?: string;
};
export const IconBase: React.FC<IProps> = ({
  name,
  size = 34,
  isFocused,
  color = '#000000',
  colorFocused,
}) => (
  <MaterialIcons
    name={name}
    size={size}
    color={colorFocused ? (isFocused ? colorFocused : color) : color}
  />
);
