import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '@screens/App/Posts';
import { MyTabBar } from './_components/TabBarCustom';
import AllChats from '@screens/App/AllChats';
import Community from '@screens/App/Community';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderWidth: 0 },
      }}>
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Chats" component={AllChats} />
      <Tab.Screen name="Empty" component={EmptyComponent} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Settings" component={Posts} />
    </Tab.Navigator>
  );
}

const EmptyComponent: React.FC = () => <React.Fragment />;
