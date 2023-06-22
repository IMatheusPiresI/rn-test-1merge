import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { StackRoutes } from './Stack/stack.routes';

export const AppRoutes = () => (
  <NavigationContainer ref={navigationRef}>
    <StackRoutes />
  </NavigationContainer>
);
