import { Box, Text, VStack } from 'native-base';
import React from 'react';

import { HeaderAuth } from '@components/HeaderAuth';
import { InputText } from '@components/Form/inputText';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { KeyboardAvoid } from '@components/Form/KeyboardAvoid';
import { Button } from '@components/Button';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleNavigateToApp = () => {
    navigation.navigate('App');
  };

  return (
    <VStack
      bgColor="#fff"
      flex={1}
      justifyItems={'flex-end'}
      justifyContent="flex-end">
      <KeyboardAvoid>
        <KeyboardDismiss>
          <VStack flex={1} justifyContent="flex-end">
            <HeaderAuth title="Login" />
            <VStack flex={1} px="8" py="4">
              <Box flex={1}>
                <InputText
                  label="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="Digit your e-mail"
                />
                <Box mt="4">
                  <InputText label="Password" placeholder="Digit your e-mail" />
                </Box>
                <Box mt="6">
                  <Button title="Log In" onPress={handleNavigateToApp} />
                </Box>
                <Box alignItems={'center'} mt="5">
                  <Text
                    fontFamily="poppins"
                    fontWeight="normal"
                    color={'#1E293B'}
                    fontSize={14}>
                    Or continue with
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleNavigateToRegister}>
                    <Text
                      fontFamily="poppins"
                      fontWeight="regular"
                      color={'#1E293B'}
                      fontSize={14}
                      mt="5">
                      Don&#39;t have account?{' '}
                      <Text fontWeight="bold" fontSize={14}>
                        Create now
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </Box>
              </Box>
            </VStack>
          </VStack>
        </KeyboardDismiss>
      </KeyboardAvoid>
    </VStack>
  );
};

export default SignIn;
