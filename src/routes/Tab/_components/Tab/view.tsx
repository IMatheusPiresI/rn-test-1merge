import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { IViewProps } from './types';
import { Text } from 'native-base';
import { IconBase } from '@components/IconBase';

const TabView: React.FC<IViewProps> = ({
  isFocused,
  iconName,
  routeName,
  ...rest
}) => (
  <TouchableOpacity style={style.button} activeOpacity={1} {...rest}>
    <IconBase
      name={iconName}
      color="#000000"
      colorFocused="#3EB489"
      isFocused={isFocused}
    />

    <Text
      fontSize={12}
      fontFamily="poppins"
      fontWeight={'normal'}
      mt="2"
      mb={Platform.OS === 'ios' ? '2' : 0}
      color={isFocused ? '#3EB489' : '#000000'}
    >
      {routeName}
    </Text>
  </TouchableOpacity>
);

export default TabView;

const style = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
