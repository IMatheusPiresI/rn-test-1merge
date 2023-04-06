import { theme } from '@resources/theme';
import { AppRoutes } from '@routes/index';
import { store } from '@store/index';
import { NativeBaseProvider, StatusBar } from 'native-base';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppRoutes />
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </NativeBaseProvider>
    </Provider>
  );
}
