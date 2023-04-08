import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { IViewProps } from './types';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import BackgroundPNG from '@assets/images/background-onboarding.png';
import AngelLogoPNG from '@assets/images/angel-logo.png';
import WomanPNG from '@assets/images/woman-sms.png';

import { PoweredByIvy } from '@components/PoweredByIvy';
import { PhoneRegister } from '@components/PhoneRegister';
import { KeyboardDismiss } from '@components/KeyboardDismiss';

export const VerifySMSView: React.FC<IViewProps> = ({ handleConfirmPhone }) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={0}>
    <KeyboardDismiss>
      <VStack flex={1}>
        <ImageBackground source={BackgroundPNG} style={styles.container}>
          <VStack
            width="100%"
            bgColor="transparent"
            pt="statusBarHeight"
            flex={1}
            px={12}>
            <VStack flex={1}>
              <VStack flex={1}>
                <Box
                  w="full"
                  alignItems={'center'}
                  justifyContent={'flex-end'}
                  mt={4}
                  flex={1}>
                  <Box alignItems={'center'} justifyContent={'center'} mb={6}>
                    <Image
                      source={AngelLogoPNG}
                      alt="Angel Logo"
                      w={116}
                      h={116}
                    />
                  </Box>
                  <Image
                    source={WomanPNG}
                    alt="Angel Logo"
                    w={'screenWidth'}
                    h={'screenHeight50'}
                    resizeMode="contain"
                  />
                  <Box mt={4} w={'full'}>
                    <PhoneRegister />
                  </Box>
                  <Box mt={4} alignItems={'center'} w="full">
                    <TouchableOpacity
                      style={styles.button}
                      activeOpacity={0.7}
                      onPress={handleConfirmPhone}>
                      <Text color="#FFFFFF" fontSize={16}>
                        Iniciar
                      </Text>
                    </TouchableOpacity>
                    <Box justifyContent="flex-end" pb={'bottomSpace16'} mt={2}>
                      <PoweredByIvy />
                    </Box>
                  </Box>
                </Box>
              </VStack>
            </VStack>
          </VStack>
        </ImageBackground>
      </VStack>
    </KeyboardDismiss>
  </KeyboardAvoidingView>
);

export default VerifySMSView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: '#703EFE',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
  },
});
