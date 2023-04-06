import React from 'react';
import { IViewProps } from './types';
import { Box, HStack, Image, Text, VStack } from 'native-base';

const ContentPostView: React.FC<IViewProps> = ({ image, text }) => {
  const renderImage = () => {
    if (!image) return;

    return (
      <Box flex={1} height={250} mt={2}>
        <Image
          source={{
            uri: image,
          }}
          w={'full'}
          h={250}
          resizeMode="cover"
          alt="post image"
        />
      </Box>
    );
  };

  const renderText = () => {
    if (!text) return;

    const isBigText = text.length > 150;
    const textShow = isBigText ? `${text.slice(0, 150)}...` : text;

    return (
      <Text fontSize={11} mt={2}>
        {textShow}
        {isBigText && (
          <Text fontSize={11} color="#703EFE" underline ml={1}>
            Ver mais
          </Text>
        )}
      </Text>
    );
  };
  return (
    <VStack mb={2}>
      <HStack>{renderText()}</HStack>
      {renderImage()}
    </VStack>
  );
};

export default ContentPostView;
