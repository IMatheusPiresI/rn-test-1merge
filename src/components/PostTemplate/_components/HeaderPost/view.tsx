import React from 'react';
import { IViewProps } from './types';
import { HStack, Image, Text } from 'native-base';

import { TouchableOpacity } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HeaderPostView: React.FC<IViewProps> = ({ name, photoUser }) => (
  <HStack>
    <HStack alignItems={'center'} flex={1}>
      <Image
        source={{ uri: photoUser }}
        alt="profile photo"
        w={7}
        h={7}
        borderRadius={'full'}
      />
      <Text
        ml="3"
        flex={1}
        fontWeight={'bold'}
        fontSize={16}
        pr="4"
        numberOfLines={1}>
        {name}
      </Text>
    </HStack>
    <HStack space={2} zIndex={99}>
      <TouchableOpacity activeOpacity={0.6}>
        <FontAwesome name="send-o" size={20} color="#A2A2A2" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <MaterialIcons name="more-horiz" size={24} color="#A2A2A2" />
      </TouchableOpacity>
    </HStack>
  </HStack>
);

export default HeaderPostView;
