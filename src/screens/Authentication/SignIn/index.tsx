import { Box, Text, VStack } from 'native-base';
import React from 'react';

import { HeaderAuth } from '@components/HeaderAuth';
import { InputText } from '@components/Form/inputText';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { KeyboardAvoid } from '@components/Form/KeyboardAvoid';
import { Button } from '@components/Button';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { ISignInSchema, signInSchema } from './schema';
import { IUserReference, useRealm } from '@database/schemas/UserSchema';
import { useAuthContext } from '@resources/hooks/useAuthContext';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const realm = useRealm();
  const { setUser } = useAuthContext();

  const formik = useFormik<ISignInSchema>({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: signInSchema,
    onSubmit: (values) => onSignIn(values),
  });

  const onSignIn = (values: ISignInSchema) => {
    const users = realm
      .objects<IUserReference>('Users')
      .filtered(
        `email = "${values.email}" AND password = "${values.password}"`,
      );

    if (users.length > 0) {
      const user = users[0];
      setUser(user);
      return;
    }
    Alert.alert('E-mail or Password incorrect');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <VStack
      bgColor="#fff"
      flex={1}
      justifyItems={'flex-end'}
      justifyContent="flex-end"
    >
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
                  value={formik.values.email}
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
                <Box mt="4">
                  <InputText
                    label="Password"
                    placeholder="Digit your password"
                    secureTextEntry
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                </Box>
                <Box mt="6">
                  <Button
                    title="Log In"
                    onPress={() => formik.handleSubmit()}
                    disabled={!formik.isValid}
                  />
                </Box>
                <Box alignItems={'center'} mt="5">
                  <Text
                    fontFamily="poppins"
                    fontWeight="normal"
                    color={'#1E293B'}
                    fontSize={14}
                  >
                    Or continue with
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleNavigateToRegister}
                  >
                    <Text
                      fontFamily="poppins"
                      fontWeight="regular"
                      color={'#1E293B'}
                      fontSize={14}
                      mt="5"
                    >
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
