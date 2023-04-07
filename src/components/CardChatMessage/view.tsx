import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { IViewProps } from './types';
import ProfilePhoto from '@assets/images/profilephoto.jpeg';
import { TouchableOpacity } from 'react-native';

const CardChatMessageView: React.FC<IViewProps> = ({
  data,
  lastMessage,
  ...rest
}) => {
  const renderQuantityMessages = () => {
    if (data.newMessages === 0) return;
    return (
      <Box
        w={6}
        h={6}
        mt={1}
        borderRadius="full"
        bgColor="#703EFE"
        alignItems="center"
        justifyContent="center">
        <Text color="white" fontSize={14} textAlign="center">
          {data.newMessages}
        </Text>
      </Box>
    );
  };
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <HStack py={2} px={6} bgColor="white" borderRadius={4} flexDir="row">
        <Box>
          <Image
            source={ProfilePhoto}
            alt="Image"
            w={55}
            h={55}
            borderRadius="full"
          />
          <Box
            position="absolute"
            bottom={0}
            right={-2}
            w={4}
            h={4}
            bgColor="#36C287"
            borderRadius="full"
          />
        </Box>
        <VStack ml={4} flex={1}>
          <Text color="black" fontWeight="bold" mt={2}>
            {data.nameContact}
          </Text>
          <Text color="#A09F9F">{lastMessage.text}</Text>
        </VStack>
        <VStack alignItems="flex-end">
          <Text color="#A09F9F">{lastMessage.time}</Text>
          {renderQuantityMessages()}
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};
export default CardChatMessageView;
