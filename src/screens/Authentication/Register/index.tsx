import { Box, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

import { HeaderAuth } from '@components/HeaderAuth';
import { InputText } from '@components/Form/inputText';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { KeyboardAvoid } from '@components/Form/KeyboardAvoid';
import { Button } from '@components/Button';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import metrics from '@resources/theme/metrics';
import { useFormik } from 'formik';
import { IRegisterSchema, registerSchema } from './schema';
import { IUserReference, useRealm } from '@database/schemas/UserSchema';
import uuid from 'react-native-uuid';
import { useAuthContext } from '@resources/hooks/useAuthContext';

export const Register: React.FC = () => {
  const realm = useRealm();
  const { setUser } = useAuthContext();
  const formik = useFormik<IRegisterSchema>({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      confirmPassword: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: registerSchema,
    onSubmit: (values) => onRegister(values),
  });

  const onRegister = async (values: IRegisterSchema) => {
    const userExists = realm
      .objects<IUserReference>('Users')
      .filtered(`email = "${values.email}"`);

    if (userExists.length > 0) {
      Alert.alert('User already exists, go to login.');
      return;
    }

    const user: IUserReference = {
      _id: String(uuid.v4()),
      ...values,
      photoUrl: '',
      created_at: String(new Date()),
    };
    realm.write(() => {
      realm.create('Users', user);
    });

    setUser(user);
  };
  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
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
          <ScrollView
            flexGrow={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: metrics.bottomSpace + 40,
            }}
          >
            <HeaderAuth title="Sign In" />
            <VStack flex={1} px="8" py="4">
              <Box flex={1}>
                <InputText
                  label="Name"
                  placeholder="Digit your name"
                  value={formik.values.name}
                  onChangeText={formik.handleChange('name')}
                  onBlur={formik.handleBlur('name')}
                  touched={formik.touched.name}
                  error={formik.errors.name}
                />
                <Box mt="4">
                  <InputText
                    label="Surname"
                    placeholder="Digit your surname"
                    value={formik.values.surname}
                    onChangeText={formik.handleChange('surname')}
                    onBlur={formik.handleBlur('surname')}
                    touched={formik.touched.surname}
                    error={formik.errors.surname}
                  />
                </Box>
                <Box mt="4">
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
                </Box>
                <Box mt="4">
                  <InputText
                    label="Password"
                    secureTextEntry
                    placeholder="Digit your e-mail"
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                  />
                </Box>
                <Box mt="4">
                  <InputText
                    label="Confirm password"
                    secureTextEntry
                    placeholder="Digit your e-mail"
                    value={formik.values.confirmPassword}
                    onChangeText={formik.handleChange('confirmPassword')}
                    onBlur={formik.handleBlur('confirmPassword')}
                    touched={formik.touched.confirmPassword}
                    error={formik.errors.confirmPassword}
                  />
                </Box>

                <Box mt="6">
                  <Button
                    title="Register"
                    onPress={() => formik.handleSubmit()}
                    disabled={!formik.isValid}
                  />
                </Box>
                <Box alignItems={'center'} mt="5">
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleNavigateToSignIn}
                  >
                    <Text
                      fontFamily="poppins"
                      fontWeight="regular"
                      color={'#1E293B'}
                      fontSize={14}
                      mt="5"
                    >
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
