import React from 'react';
import { Box, Input } from 'native-base';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IViewProps } from './types';

const InputSearchView: React.FC<IViewProps> = ({ ...rest }) => (
  <Box justifyContent="center" flex={1} maxH={16}>
    <Input
      bgColor="white"
      pl="16"
      fontSize={18}
      h={16}
      borderRadius={4}
      borderWidth={0}
      {...rest}
    />
    <Box position="absolute" left={4}>
      <MaterialIcons name="search" size={34} color={'#bfbfbf'} />
    </Box>
  </Box>
);

export default InputSearchView;
