import React from 'react';
import { Box, VStack } from 'native-base';
import { IViewProps } from './types';
import EditSVG from '../../assets/svg/edit.svg';
import ButtonOpacity from '@components/ButtonOpacity';
import { InputSearch } from '@components/Forms/InputSearch';

const HeaderChatView: React.FC<IViewProps> = () => (
  <VStack h={16} flexDir="row">
    <Box flex={1} mr={4}>
      <InputSearch placeholder="Search message..." />
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
