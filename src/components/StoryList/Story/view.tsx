import React from 'react';
import { IViewProps } from './types';
import { Box, Image, Text, VStack } from 'native-base';

const Story: React.FC<IViewProps> = ({ firstName, secondName, imageUrl }) => (
  <Box alignItems={'center'} justifyContent={'center'}>
    <Image
      source={{ uri: imageUrl }}
      alt="profile photo"
      w={12}
      h={12}
      borderRadius={'full'}
    />
    <VStack>
      <Text textAlign={'center'} fontSize={10} color={'#000'}>
        {firstName}
      </Text>
      <Text textAlign={'center'} fontSize={10} color={'#000'}>
        {secondName}
      </Text>
    </VStack>
  </Box>
);

export default Story;
