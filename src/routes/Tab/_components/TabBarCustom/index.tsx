import React from 'react';

import { IProps } from './types';
import { TabCustom } from '../Tab';
import { navigate } from '@routes/RootNavigation';
import { HStack } from 'native-base';
import { Platform, StyleSheet } from 'react-native';
export const MyTabBar: React.FC<IProps> = ({ state, navigation }) => (
  <HStack
    flexDir="row"
    height={Platform.OS === 'ios' ? '80px' : '72px'}
    width="full"
    backgroundColor="white"
    borderWidth="0"
    borderColor="white"
    style={style.shadow}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigate(route.name, { merge: true });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TabCustom
          key={route.name}
          onPress={onPress}
          isFocused={isFocused}
          routeName={route.name}
          onLongPress={onLongPress}
        />
      );
    })}
  </HStack>
);

const style = StyleSheet.create({
  shadow: {
    elevation: 6,
    shadowColor: '#0005',
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
});
