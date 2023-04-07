import React from 'react';
import { IViewProps } from './types';
import { Box, Image, Text, VStack } from 'native-base';

const Story: React.FC<IViewProps> = ({
  firstName,
  secondName,
  imageUrl,
  isCurrentUser,
}) => {
  const renderNameOrMyStory = () => {
    if (!isCurrentUser) {
      return (
        <React.Fragment>
          <Text textAlign={'center'} fontSize={10} color={'#000'}>
            {firstName}
          </Text>
          <Text textAlign={'center'} fontSize={10} color={'#000'}>
            {secondName}
          </Text>
        </React.Fragment>
      );
    }

    return (
      <Text textAlign={'center'} fontSize={10} color={'#000'}>
        Seu Story
      </Text>
    );
  };
  return (
    <Box alignItems={'center'}>
      <Image
        source={{ uri: imageUrl }}
        alt="profile photo"
        w={12}
        h={12}
        borderRadius={'full'}
      />
      <VStack mt={1}>{renderNameOrMyStory()}</VStack>
    </Box>
  );
};

export default Story;
