import { Box, Image, Text } from 'native-base';
import React from 'react';
import { IViewProps } from './types';

const ChatMessageView: React.FC<IViewProps> = ({
  message,
  isCurrentUserMessage,
}) => {
  const renderImage = () => {
    if (!message.imageUrl) return;

    return (
      <Box mb="2" alignItems={'center'} height={120}>
        <Image
          source={{
            uri: message.imageUrl,
          }}
          resizeMode="stretch"
          w="screenWidth70"
          h="full"
          alt="image chat"
          borderRadius={'16'}
        />
      </Box>
    );
  };
  const renderCurrentUserMessage = () => (
    <Box w="full" alignItems={'flex-end'} justifyContent={'flex-end'}>
      <Box
        background={isCurrentUserMessage ? '#703EFE' : '#FFF'}
        alignItems={'flex-start'}
        px="6"
        py="4"
        maxWidth={'screenWidth70'}
        borderTopLeftRadius={'18'}
        borderTopRightRadius={'18'}
        borderBottomLeftRadius={'18'}>
        {renderImage()}
        <Text color={'#FFF'} textAlign={'left'} fontSize={14}>
          {message.text}
        </Text>
      </Box>
    </Box>
  );

  const renderOtherUserMessage = () => (
    <Box w="full" alignItems={'flex-start'} justifyContent={'flex-end'}>
      <Box
        background={isCurrentUserMessage ? '#703EFE' : '#FFF'}
        alignItems={'flex-start'}
        px="6"
        py="4"
        maxWidth={'screenWidth70'}
        borderTopLeftRadius={'18'}
        borderTopRightRadius={'18'}
        borderBottomRightRadius={'18'}>
        {renderImage()}
        <Text color={'#000'} textAlign={'left'} fontSize={14}>
          {message.text}
        </Text>
      </Box>
    </Box>
  );

  const renderMessages = () => {
    if (!isCurrentUserMessage) {
      return renderOtherUserMessage();
    }

    return renderCurrentUserMessage();
  };
  return renderMessages();
};

export default ChatMessageView;
