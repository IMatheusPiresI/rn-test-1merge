import { IconBase } from '@components/IconBase';
import { Box, HStack, Image } from 'native-base';
import React from 'react';

import PhotoPNG from '@assets/images/photoRound.png';

export const Header: React.FC = () => (
  <HStack alignItems="center" justifyContent="space-between">
    <IconBase name="menu" size={32} />
    <HStack space="4" alignItems="center" justifyContent="center">
      <IconBase size={32} name="notifications-none" />
      <Box>
        <Image source={PhotoPNG} width={8} height={8} alt="image profile" />
      </Box>
    </HStack>
  </HStack>
);
