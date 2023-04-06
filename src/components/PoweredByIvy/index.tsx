import { Box, Text } from 'native-base';
import React from 'react';
import IvyLogoSVG from '@assets/svg/ivy-logo.svg';

export const PoweredByIvy: React.FC = () => (
  <Box alignItems={'center'} justifyContent={'center'} w="full">
    <Box flexDirection="row" alignItems={'center'} justifyContent={'center'}>
      <Text mr={1}>Produzido por</Text>
      <IvyLogoSVG width={40} height={23} />
    </Box>
  </Box>
);
