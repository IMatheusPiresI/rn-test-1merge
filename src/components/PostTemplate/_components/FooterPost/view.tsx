import React from 'react';
import { IViewProps } from './types';
import { Box, HStack, Text } from 'native-base';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const FooterPostView: React.FC<IViewProps> = () => (
  <HStack alignItems={'center'} justifyContent={'space-between'}>
    <HStack alignItems={'center'}>
      <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={24} color={'#A2A2A2'} />
      </TouchableOpacity>
      <Text ml={1} fontSize={10} color="#000">
        127 Curtidas
      </Text>
    </HStack>
    <Box>
      <Text fontSize={10} color="#000">
        256 Comentários
      </Text>
    </Box>
  </HStack>
);

export default FooterPostView;
