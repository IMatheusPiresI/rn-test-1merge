import React from 'react';
import { Box, Input, VStack } from 'native-base';
import { IViewProps } from './types';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EditSVG from '../../assets/svg/edit.svg';
import ButtonOpacity from '@components/ButtonOpacity';

const HeaderChatView: React.FC<IViewProps> = () => (
  <VStack h={16} flexDir="row">
    <Box justifyContent="center" flex={1} mr={4}>
      <Input
        bgColor="white"
        placeholder="Search message..."
        pl="16"
        fontSize={18}
        h={16}
        borderRadius={4}
        borderWidth={0}
      />
      <Box position="absolute" left={4}>
        <MaterialIcons name="search" size={34} color={'#bfbfbf'} />
      </Box>
    </Box>
    <Box
      w={16}
      h={16}
      bgColor="#fff"
      borderRadius={4}
      alignItems="center"
      justifyContent={'center'}>
      <Box
        position="absolute"
        alignItems={'center'}
        justifyContent="center"
        w="full"
        h="full">
        <ButtonOpacity>
          <Box>
            <EditSVG width={30} height={30} />
          </Box>
        </ButtonOpacity>
      </Box>
    </Box>
  </VStack>
);

export default HeaderChatView;
