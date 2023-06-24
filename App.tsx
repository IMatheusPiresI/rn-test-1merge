import React from 'react';

import { theme } from '@resources/theme';
import { AppRoutes } from '@routes/index';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import 'react-native-gesture-handler';
import { RealmProvider } from '@database/schemas/UserSchema';
import { AuthContextProvider } from '@contexts/authContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RealmProvider>
      <AuthContextProvider>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <AppRoutes />
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </AuthContextProvider>
    </RealmProvider>
  );
}
