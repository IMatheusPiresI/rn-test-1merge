import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack/stack.routes';
import { navigationRef } from './RootNavigation';

export const AppRoutes = () => (
  <NavigationContainer ref={navigationRef}>
    <StackRoutes />
  </NavigationContainer>
);
