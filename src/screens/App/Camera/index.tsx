import { IconBase } from '@components/IconBase';
import { writeNewUserPhoto } from '@database/index';
import { useRealm } from '@database/schemas/UserSchema';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '@resources/hooks/useAuthContext';
import { useGalleryPicker } from '@resources/hooks/useGalleryPicker';
import { Camera as ExpoCamera, CameraType, FlashMode } from 'expo-camera';
import { Box, HStack, StatusBar, VStack } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Camera: React.FC = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const cameraRef = useRef<ExpoCamera>(null);
  const { base64PickImage } = useGalleryPicker();
  const pictureAnimate = useSharedValue(0);
  const realm = useRealm();
  const navigation = useNavigation();
  const { user, changePhotoUser } = useAuthContext();

  const rAnimatedPicture = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      pictureAnimate.value,
      [0, 1],
      ['rgba(0,0,0, 0)', 'rgba(0,0,0,.2)'],
    );

    return {
      flex: 1,
      backgroundColor,
    };
  });

  const animateOnPicture = () => {
    pictureAnimate.value = withTiming(1, { duration: 200 });
    setTimeout(() => {
      pictureAnimate.value = withTiming(0, { duration: 200 });
    }, 200);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleFlashMode = () => {
    setFlashMode((current) =>
      current === FlashMode.torch ? FlashMode.off : FlashMode.torch,
    );
  };

  const pickImage = async () => {
    if (!user) return;
    try {
      const imageBase64 = await base64PickImage();

      if (!imageBase64) return;

      writeNewUserPhoto(realm, user!._id, imageBase64);
      changePhotoUser(imageBase64);

      handleGoBack();
    } catch (err) {
      Alert.alert('Erro or take picture from gallery');
    }
  };

  const takePicture = async () => {
    if (!user) return;
    animateOnPicture();

    try {
      const picture = await cameraRef.current?.takePictureAsync({
        base64: true,
        quality: 1,
      });

      if (!picture?.base64) return;

      writeNewUserPhoto(realm, user._id, picture.base64!);
      changePhotoUser(picture.base64!);

      handleGoBack();
    } catch (err) {
      Alert.alert('Error on take picture');
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (!permission) return null;

  if (!permission.granted) return null;

  return (
    <VStack flex={1}>
      <StatusBar translucent barStyle="light-content" />
      <HStack
        w="full"
        h="95px"
        bgColor={'#000'}
        alignItems="center"
        pt="statusBarHeight"
        justifyContent={'space-between'}
        px="4"
      >
        <TouchableOpacity onPress={handleGoBack}>
          <Box>
            <IconBase name="arrow-back" color="#fff" />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlashMode}>
          <Box>
            {flashMode === FlashMode.torch ? (
              <IconBase name="flash-off" color="#fff" />
            ) : (
              <IconBase name="flash-on" color="#fff" />
            )}
          </Box>
        </TouchableOpacity>
      </HStack>
      <VStack flex={1} bgColor="#000">
        <ExpoCamera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flashMode}
        >
          <Animated.View style={rAnimatedPicture} />
        </ExpoCamera>
      </VStack>
      <HStack
        w="full"
        h="125px"
        bgColor="#000"
        pb="bottomSpace"
        alignItems="center"
        justifyContent="space-between"
        px="8"
      >
        <TouchableOpacity onPress={pickImage}>
          <Box
            w="16"
            h="16"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            <IconBase name="photo" size={42} color="#fff" />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture}>
          <Box w="16" h="16" bgColor={'#fff'} borderRadius="full" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraType}>
          <Box
            w="16"
            h="16"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            <IconBase name="camera-front" size={42} color="#fff" />
          </Box>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

export default Camera;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
