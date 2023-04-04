import React from 'react';
import { Box, Input, VStack } from 'native-base';
import { IViewProps } from './types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EditSVG from '../../assets/svg/edit.svg';

const HeaderChatView: React.FC<IViewProps> = () => (
  <VStack h={12} flexDir="row">
    <Box justifyContent="center" flex={1} mr={4}>
      <Input
        bgColor="white"
        placeholder="Search message..."
        pl={12}
        fontSize={14}
        h={12}
        borderRadius={8}
        borderWidth={0}
      />
      <Box position="absolute" left={4}>
        <MaterialIcons name="search" size={24} color={'#bfbfbf'} />
      </Box>
    </Box>
    <Box
      w={12}
      h={12}
      bgColor="#fff"
      borderRadius={8}
      alignItems="center"
      justifyContent={'center'}>
      <Box
        position="absolute"
        w="full"
        alignItems={'center'}
        justifyContent="center">
        <Box ml={0.5}>
          <EditSVG width={40} height={40} />
        </Box>
      </Box>
    </Box>
  </VStack>
);

export default HeaderChatView;
