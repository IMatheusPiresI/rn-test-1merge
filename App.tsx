import { theme } from '@resources/theme';
import { AppRoutes } from '@routes/index';
import { NativeBaseProvider, StatusBar } from 'native-base';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppRoutes />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </NativeBaseProvider>
  );
}
