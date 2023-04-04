import React from 'react';
import { Box, VStack } from 'native-base';
import HeaderChat from '@components/HeaderChat';

const ChatsView: React.FC = () => (
  <VStack flex={1} bgColor="red.200" py="statusBarHeight16" px="5">
    <Box>
      <HeaderChat />
    </Box>
  </VStack>
);

export default ChatsView;
