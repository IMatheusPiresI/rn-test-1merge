import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import { MyTabBar } from './_components/TabBarCustom';
import Onboarding from '@screens/Onboarding';
import Chats from '@screens/Chats';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Community" component={Onboarding} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Empty" component={EmptyComponent} />
      <Tab.Screen name="Posts" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
}

const EmptyComponent: React.FC = () => <React.Fragment />;
