import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/tab.routes';
import Register from '@screens/Authentication/Register';
import SignIn from '@screens/Authentication/SignIn';

const Stack = createStackNavigator();

export const StackAuth = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export const StackApp = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="AppRoutes" component={TabRoutes} />
  </Stack.Navigator>
);

export const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Authentication" component={StackAuth} />
    <Stack.Screen name="App" component={StackApp} />
  </Stack.Navigator>
);
