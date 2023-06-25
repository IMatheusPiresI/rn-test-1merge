import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabRoutes from '@routes/Tab/tab.routes';
import Camera from '@screens/App/Camera';
import ListMovies from '@screens/App/ListMovies';
import MovieDetail from '@screens/App/MovieDetail';
import Register from '@screens/Authentication/Register';
import SignIn from '@screens/Authentication/SignIn';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
const Stack = createStackNavigator();

const StackShared = createSharedElementStackNavigator();

const StackSharedElement = () => (
  <StackShared.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackShared.Screen name="ListMovies" component={ListMovies} />
    <StackShared.Screen
      name="MovieDetail"
      component={MovieDetail}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
      sharedElements={(route) => {
        const { movie } = route.params;
        return [`item.${movie.id}.image`];
      }}
    />
  </StackShared.Navigator>
);

export const StackAuth = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export const StackApp = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AppRoutes" component={TabRoutes} />
    <Stack.Screen name="ExtraPage" component={StackSharedElement} />
    <Stack.Screen name="Camera" component={Camera} />
  </Stack.Navigator>
);
