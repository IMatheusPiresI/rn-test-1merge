import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IViewProps } from './types';

const TabView: React.FC<IViewProps> = ({ isFocused, iconName, ...rest }) => (
  <TouchableOpacity style={style.button} activeOpacity={1} {...rest}>
    <MaterialIcons
      name={iconName}
      size={34}
      color={isFocused ? '#703EFE' : '#A09F9F'}
    />
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
