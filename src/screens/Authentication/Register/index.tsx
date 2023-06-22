import { Box, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

import { HeaderAuth } from '@components/HeaderAuth';
import { InputText } from '@components/Form/inputText';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { KeyboardAvoid } from '@components/Form/KeyboardAvoid';
import { Button } from '@components/Button';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import metrics from '@resources/theme/metrics';

export const Register: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <VStack
      bgColor="#fff"
      flex={1}
      justifyItems={'flex-end'}
      justifyContent="flex-end">
      <KeyboardAvoid>
        <KeyboardDismiss>
          <ScrollView
            flexGrow={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: metrics.bottomSpace + 40,
            }}>
            <HeaderAuth title="Sign In" />
            <VStack flex={1} px="8" py="4">
              <Box flex={1}>
                <InputText label="Name" placeholder="Digit your name" />
                <Box mt="4">
                  <InputText label="Surname" placeholder="Digit your surname" />
                </Box>
                <Box mt="4">
                  <InputText
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Digit your e-mail"
                  />
                </Box>
                <Box mt="4">
                  <InputText
                    label="Password"
                    secureTextEntry
                    placeholder="Digit your e-mail"
                  />
                </Box>
                <Box mt="4">
                  <InputText
                    label="Confirm password"
                    secureTextEntry
                    placeholder="Digit your e-mail"
                  />
                </Box>

                <Box mt="6">
                  <Button title="Register" />
                </Box>
                <Box alignItems={'center'} mt="5">
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleNavigateToSignIn}>
                    <Text
                      fontFamily="poppins"
                      fontWeight="regular"
                      color={'#1E293B'}
                      fontSize={14}
                      mt="5">
                      Have an account?{' '}
                      <Text fontWeight="bold" fontSize={14}>
                        Log In
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </Box>
              </Box>
            </VStack>
          </ScrollView>
        </KeyboardDismiss>
      </KeyboardAvoid>
    </VStack>
  );
};

export default Register;
