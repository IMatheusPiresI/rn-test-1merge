import { NavigationContainer } from '@react-navigation/native';
import { useAuthContext } from '@resources/hooks/useAuthContext';
import { navigationRef } from './RootNavigation';
import { StackApp, StackAuth } from './Stack/stack.routes';

export const AppRoutes = () => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer ref={navigationRef}>
      {user?.email ? <StackApp /> : <StackAuth />}
    </NavigationContainer>
  );
};
