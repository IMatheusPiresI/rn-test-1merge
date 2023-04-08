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
      borderRadius={'full'}
      alignItems="center"
      justifyContent="center"
      overflow={'hidden'}
      position="absolute"
      top="-30"
      zIndex={100}
      style={style.shadowButton}>
      <TouchableOpacity activeOpacity={0.8}>
        <Box
          width={65}
          height={65}
          bgColor={'#703EFE'}
          alignItems="center"
          justifyContent="center">
          <MaterialIcons name="add" size={24} color="#fff" />
        </Box>
      </TouchableOpacity>
    </Box>
  </VStack>
);

export default ActionButtonView;

const style = StyleSheet.create({
  shadowButton: {
    elevation: 8,
    shadowColor: '#703EFE',
    shadowRadius: 0.25,
    shadowOpacity: 0.6,
  },
});
