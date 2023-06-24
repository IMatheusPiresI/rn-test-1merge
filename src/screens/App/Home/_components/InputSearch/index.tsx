import { Box, HStack, Input } from 'native-base';
import React from 'react';

import SearchSVG from '@assets/svg/search.svg';
import SettingSVG from '@assets/svg/setting.svg';
import MicrophoneSVG from '@assets/svg/microphone.svg';

export const InputSearch: React.FC = () => (
  <HStack
    alignItems="center"
    borderWidth={1}
    borderColor="#C4C4C4"
    borderRadius="10"
    px="3"
    h={[60]}
  >
    <Box>
      <SearchSVG width={28} height={28} />
    </Box>
    <Input
      flex={1}
      height="full"
      pl={2}
      fontFamily="poppins"
      fontSize={16}
      borderWidth={0}
      backgroundColor="#fff"
      placeholderTextColor="#696969"
      placeholder="Search here"
    />
    <HStack space={4} height="full" alignItems={'center'}>
      <MicrophoneSVG width={28} height={28} />
      <Box w={'1px'} h="8" background="#C4C4C4" />
      <SettingSVG width={28} height={28} />
    </HStack>
  </HStack>
);
