import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './_components/TabBarCustom';
import Home from '@screens/App/Home';
import Profile from '@screens/App/Profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={EmptyComponent} />
      <Tab.Screen name="Settings" component={EmptyComponent} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const EmptyComponent: React.FC = () => <></>;
