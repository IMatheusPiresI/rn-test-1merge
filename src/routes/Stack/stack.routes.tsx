import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/tab.routes';
import Onboarding from '@screens/Authentication/Onboarding';
import VerifySMS from '@screens/Authentication/VerifySMS';

const Stack = createStackNavigator();

export const StackAuth = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="VerifySMS" component={VerifySMS} />
  </Stack.Navigator>
);

export const StackApp = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={TabRoutes} />
  </Stack.Navigator>
);

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Authentication" component={StackAuth} />
    <Stack.Screen name="AppRoutes" component={StackApp} />
  </Stack.Navigator>
);
