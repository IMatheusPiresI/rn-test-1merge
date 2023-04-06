import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { IViewProps } from './types';
import AngelClubPNG from '@assets/images/angel-club.png';
import EditSVG from '@assets/svg/edit.svg';
import { TouchableOpacity } from 'react-native';

const CardCommunityView: React.FC<IViewProps> = ({ data, ...rest }) => (
  <TouchableOpacity activeOpacity={0.6} {...rest}>
    <HStack py={2} px={6} bgColor="white" borderRadius={4} flexDir="row">
      <Box>
        <Image
          source={AngelClubPNG}
          alt="Image"
          w={55}
          h={55}
          borderRadius="full"
        />
      </Box>
      <VStack ml={3} flex={1}>
        <Text color="black" fontWeight="bold" mt={2} numberOfLines={1} pr={2}>
          {data.title}
        </Text>
        <Text color="#A09F9F">{data.chats} conversas</Text>
      </VStack>
      <VStack alignItems={'center'} justifyContent={'center'}>
        <TouchableOpacity activeOpacity={0.6}>
          <EditSVG width={26} height={26} />
        </TouchableOpacity>
      </VStack>
    </HStack>
  </TouchableOpacity>
);

export default CardCommunityView;
