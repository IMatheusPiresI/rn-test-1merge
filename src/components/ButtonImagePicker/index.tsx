import { Box, HStack, Modal, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import {
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import CameraSVG from '@assets/svg/camera.svg';
import metrics from '@resources/theme/metrics';
import { IconBase } from '@components/IconBase';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '@resources/hooks/useAuthContext';
import { useGalleryPicker } from '@resources/hooks/useGalleryPicker';
import { writeNewUserPhoto } from '@database/index';
import { useRealm } from '@database/schemas/UserSchema';

export const ButtonImagePicker: React.FC = () => {
  const navigation = useNavigation();
  const { user, changePhotoUser } = useAuthContext();
  const { base64PickImage } = useGalleryPicker();
  const realm = useRealm();
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  const handleOpenCamera = () => {
    handleCloseOptions();
    navigation.navigate('Camera');
  };
  const pickImage = async () => {
    handleCloseOptions();
    if (!user) return;
    try {
      const imageBase64 = await base64PickImage();

      if (!imageBase64) return;

      writeNewUserPhoto(realm, user!._id, imageBase64);
      changePhotoUser(imageBase64);
    } catch (err) {
      Alert.alert('Erro or take picture from gallery');
    }
  };

  return (
    <VStack>
      <TouchableOpacity activeOpacity={0.7} onPress={handleShowOptions}>
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
      <Modal isOpen={showOptions} backdropVisible={false}>
        <TouchableWithoutFeedback
          touchSoundDisabled
          onPress={handleCloseOptions}
        >
          <VStack flex={1} w="full" alignItems={'center'}>
            <Box
              bgColor={'#fff'}
              position="absolute"
              top="screenHeight25"
              left={metrics.screenWidth * 0.59}
              borderRadius="8"
            >
              <TouchableOpacity activeOpacity={0.6} onPress={handleOpenCamera}>
                <HStack
                  alignItems={'center'}
                  borderBottomWidth={1}
                  borderColor="#000"
                  px="3"
                  py="2"
                >
                  <IconBase size={22} name="photo-camera" color="#000" />
                  <Text
                    fontFamily="poppins"
                    fontWeight={'medium'}
                    color="#000"
                    fontSize={14}
                    ml="2"
                  >
                    Camera
                  </Text>
                </HStack>
              </TouchableOpacity>

              <TouchableOpacity onPress={pickImage} activeOpacity={0.6}>
                <HStack alignItems={'center'} px="3" py="2">
                  <IconBase size={22} name="photo" color="#000" />
                  <Text
                    fontFamily="poppins"
                    fontWeight={'medium'}
                    color="#000"
                    fontSize={14}
                    ml="2"
                  >
                    Galery
                  </Text>
                </HStack>
              </TouchableOpacity>
            </Box>
          </VStack>
        </TouchableWithoutFeedback>
      </Modal>
    </VStack>
  );
};
