import { Box, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IViewProps } from './types';

const ActionButtonView: React.FC<IViewProps> = () => (
  <VStack alignItems="center" w={12} justifyContent="center" zIndex={99}>
    <Box
      width={65}
      height={65}
      overflow="hidden"
      bgColor={'#703EFE'}
      borderRadius={'full'}
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top="-30"
      zIndex={100}
      style={style.shadowButton}>
      <TouchableOpacity style={style.button} activeOpacity={0.7}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </Box>
  </VStack>
);

export default ActionButtonView;

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowButton: {
    elevation: 8,
    shadowColor: '#703EFE',
    shadowRadius: 0.25,
    shadowOpacity: 0.6,
  },
});
