import { Button, Text, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { IViewProps } from './types';

export const OnboardingView: React.FC<IViewProps> = ({ handleGoToApp }) => (
  <VStack bgColor="#fff" flex={1}>
    <VStack width="100%" height="60%" bgColor="#bbbbbb" />
    <VStack
      position="absolute"
      bottom={0}
      width="100%"
      height="45%"
      bgColor="white"
      borderRadius={30}
      overflow="hidden"
      alignItems="center"
      py={5}>
      <Text fontSize={18} fontWeight="bold" textAlign="center" color="#000">
        Investimentos em pessoas,{'\n'} transformamos vidas, realizamos{'\n'}{' '}
        sonhos!
      </Text>
      <Text
        fontSize={14}
        my={2}
        fontWeight="bold"
        textAlign="center"
        color="#9c9c9c">
        Investimentos em pessoas, transformamos{'\n'} vidas, realizamos sonhos!
      </Text>
      <Button
        bgColor="blue.700"
        width="100%"
        maxWidth={300}
        borderRadius="full"
        py={3}
        mt={4}
        shadow={4}
        onPress={handleGoToApp}>
        <Text fontSize={18} textAlign="center" color="#fff8">
          Iniciar
        </Text>
      </Button>
    </VStack>
  </VStack>
);

export default OnboardingView;
