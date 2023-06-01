import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

//--------------------------------------------------
import HomePage from '../pages/HomePage';
import ShowPage from '../pages/ShowPage';

//--------------------------------------------------

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'HomePage') {
            iconName += 'home-outline';
          } else if (route.name === 'ShowPage') {
            iconName += 'trophy-outline';
          } else if (route.name === 'ChatBoxPage') {
            iconName += 'chatbubbles-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'tomato' : 'grey'}
              size={26}
            />
          );
        },
        // tabBarActiveTintColor: "tomato",
        // tabBarInactiveTintColor: "gray",
        // Screen name 텍스트 안보이게 하기
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            height: 50,
            display: 'flex',
          },
          null,
        ],
      })}
    >
      <Tabs.Screen name="HomePage" component={HomePage} />
      <Tabs.Screen name="ShowPage" component={ShowPage} />
    </Tabs.Navigator>
  );
};
export default TabNavigator;
