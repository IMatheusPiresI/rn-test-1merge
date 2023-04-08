import { Box, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import { IViewProps } from './types';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CardChatMessageView: React.FC<IViewProps> = ({
  data,
  lastMessage,
  showIcon,
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

  const renderIconView = () => {
    if (!showIcon) return;

    return (
      <Box mr={1}>
        <MaterialIcons name="done-all" size={16} color="#A09F9F" />
      </Box>
    );
  };
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <HStack py={2} px={6} bgColor="white" borderRadius={4} flexDir="row">
        <Box>
          <Image
            source={{
              uri: data.photoContact,
            }}
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
            bgColor={data.online ? '#36C287' : '#A09F9F'}
            borderRadius="full"
          />
        </Box>
        <VStack ml={4} flex={1}>
          <Text color="black" fontWeight="bold" mt={2}>
            {data.nameContact}
          </Text>
          <HStack alignItems={'center'}>
            {renderIconView()}
            <Text color="#A09F9F" numberOfLines={1}>
              {lastMessage.text}
            </Text>
          </HStack>
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
