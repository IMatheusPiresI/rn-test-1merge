import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { IViewProps } from './types';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import BackgroundPNG from '@assets/images/background-onboarding.png';
import AngelLogoPNG from '@assets/images/angel-logo.png';
import WomanPNG from '@assets/images/woman-sms.png';

import { PoweredByIvy } from '@components/PoweredByIvy';
import { PhoneRegister } from '@components/PhoneRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const VerifySMSView: React.FC<IViewProps> = ({ handleConfirmPhone }) => (
  <VStack flex={1}>
    <ImageBackground source={BackgroundPNG} style={styles.containerBackground}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="always">
        <VStack
          width="100%"
          height="60%"
          bgColor="transparent"
          pt="statusBarHeight"
          flex={1}
          px={12}>
          <Box alignItems={'center'} justifyContent={'center'} mt={6}>
            <Image source={AngelLogoPNG} alt="Angel Logo" w={124} h={124} />
          </Box>
          <VStack flex={1}>
            <Box
              w="full"
              alignItems={'center'}
              justifyContent={'center'}
              mt={4}>
              <Image
                source={WomanPNG}
                alt="Angel Logo"
                w={'screenWidth'}
                h={354}
                resizeMode="contain"
              />
            </Box>
            <Box mt={4} w={'full'}>
              <PhoneRegister />
            </Box>
          </VStack>
        </VStack>

        <Box mt={4} alignItems={'center'}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleConfirmPhone}>
            <Text color="#FFFFFF" fontSize={16}>
              Iniciar
            </Text>
          </TouchableOpacity>
        </Box>
      </KeyboardAwareScrollView>
      <Box justifyContent="flex-end" pb={'bottomSpace16'} mt={2}>
        <PoweredByIvy />
      </Box>
    </ImageBackground>
  </VStack>
);

export default VerifySMSView;

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
  },
  button: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: '#703EFE',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
  },
});
