import { Box, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import UserPhotoProfilePNG from '@assets/images/userPhotoProfile.png';
import { CardProfileOption } from '@components/CardProfileOption';
import EditGreenSVG from '@assets/svg/editGreen.svg';
import CameraSVG from '@assets/svg/camera.svg';
import { useAuthContext } from '@resources/hooks/useAuthContext';

const Profile: React.FC = () => {
  const { user } = useAuthContext();
  return (
    <VStack flex={1}>
      <Box w="full" h="screenHeight65" position={'absolute'}>
        <ImageBackground
          source={user?.photoUrl ? { uri: user.photoUrl } : UserPhotoProfilePNG}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </Box>
      <VStack
        flexGrow={1}
        bgColor="#fff"
        top="screenHeight35"
        borderTopRadius={56}
        py="8"
        px="6"
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          left="0"
          alignItems={'center'}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Box
              w="75px"
              h="75px"
              bgColor="white"
              bottom="38px"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
            >
              <CameraSVG width={36} height={36} />
            </Box>
          </TouchableOpacity>
        </Box>
        <Box position="absolute" top="16" right="8">
          <EditGreenSVG width={31} height={33} />
        </Box>
        <Text
          fontSize={27}
          fontFamily="poppins"
          fontWeight="bold"
          color="#09051C"
          numberOfLines={1}
        >
          {user?.name} {user?.surname}
        </Text>
        <Text
          fontSize={14}
          fontFamily="poppins"
          fontWeight="normal"
          color="#3B3B3B"
          numberOfLines={1}
          width="80%"
        >
          {user?.email}
        </Text>
        <VStack space={4} mt="4" flex={1}>
          <CardProfileOption title="Settings" />
          <CardProfileOption title="Pending reviews" />
          <CardProfileOption title="Faq" />
          <CardProfileOption title="Help" />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Profile;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
