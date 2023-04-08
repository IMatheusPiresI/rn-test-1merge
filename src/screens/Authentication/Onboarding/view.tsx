import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { IViewProps } from './types';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import BackgroundPNG from '@assets/images/background-onboarding.png';
import AngelLogoPNG from '@assets/images/angel-logo.png';
import PeoplesPNG from '@assets/images/peoples.png';
import { PoweredByIvy } from '@components/PoweredByIvy';

export const OnboardingView: React.FC<IViewProps> = ({
  handleGoToVerifySMS,
}) => (
  <VStack bgColor="#fff" flex={1}>
    <ImageBackground source={BackgroundPNG} style={styles.containerBackground}>
      <VStack
        width="100%"
        bgColor="transparent"
        pt="statusBarHeight"
        flex={1}
        px={4}>
        <Box alignItems={'center'} justifyContent={'center'} mt={4}>
          <Image source={AngelLogoPNG} alt="Angel Logo" w={82} h={82} />
        </Box>
        <Box alignItems={'center'} flex={1}>
          <Image
            source={PeoplesPNG}
            alt="Angel Logo"
            w={'screenWidth'}
            h={'screenHeight50'}
            resizeMode="contain"
          />
          <Box w="full" mt="2">
            <Text
              textAlign={'center'}
              fontWeight="bold"
              fontSize={16}
              lineHeight={20}>
              Investimos em pessoas,{'\n'} transformamos vidas, realizamos{'\n'}
              sonhos!
            </Text>
          </Box>
          <Box w="full" mt="2" mb="4">
            <Text textAlign={'center'} fontSize={12} color={'#000000'}>
              Investimos em pessoas, transformamos vidas,{'\n'} realizamos
              sonhos!
            </Text>
          </Box>
        </Box>
      </VStack>
      <Box
        justifyContent="flex-end"
        pb={'bottomSpace16'}
        mt={2}
        alignItems={'center'}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleGoToVerifySMS}>
          <Text color="#FFFFFF" fontSize={16}>
            Iniciar
          </Text>
        </TouchableOpacity>
        <PoweredByIvy />
      </Box>
    </ImageBackground>
  </VStack>
);

export default OnboardingView;

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
    marginBottom: 8,
  },
});
