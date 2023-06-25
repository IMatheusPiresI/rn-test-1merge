import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const useGalleryPicker = () => {
  const base64PickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: true,
      });

      if (!result.assets || result.assets?.length === 0) return;

      return result.assets[0].base64;
    } catch (err) {
      Alert.alert('Erro on take picture gallery');
    }
  };

  return {
    base64PickImage,
  };
};
