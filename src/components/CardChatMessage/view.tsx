import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { IViewProps } from './types';
import ProfilePhoto from '@assets/images/profilephoto.jpeg';

const CardChatMessageView: React.FC<IViewProps> = () => {
  const renderQuantityMessages = () => (
    <Box
      w={6}
      h={6}
      mt={1}
      borderRadius="full"
      bgColor="purple.600"
      alignItems="center"
      justifyContent="center">
      <Text color="white" fontSize={14} textAlign="center">
        3
      </Text>
    </Box>
  );
  return (
    <HStack py={4} px={6} bgColor="white" borderRadius={4} flexDir="row">
      <Box>
        <Image
          source={ProfilePhoto}
          alt="euu"
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
          bgColor="green.400"
          borderRadius="full"
        />
      </Box>
      <VStack ml={4} flex={1}>
        <Text color="black" fontWeight="bold" mt={2}>
          Miler Augusto
        </Text>
        <Text color="#a6a6a6">Perfect Will check it!</Text>
      </VStack>
      <VStack alignItems="flex-end">
        <Text color="#a6a6a6">09:34 PM</Text>
        {renderQuantityMessages()}
      </VStack>
    </HStack>
  );
};
export default CardChatMessageView;
