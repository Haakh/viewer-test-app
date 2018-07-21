import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image, Text } from 'react-native';
import { NavigationTabs } from '../../utils/RouteNames';
import { HomeContainer } from '..';

const tabBarIcon = (focused: boolean, tintColor: string | null, navigation: any) => {
  const { routeName } = navigation.state;
  let iconName;
  const unfocused = '';
  switch (routeName) {
    case NavigationTabs.Folder:
      iconName = focused ? focused : unfocused;
      break;
    case NavigationTabs.Camera:
      iconName = focused ? focused : unfocused;
      break;
    case NavigationTabs.Video:
      iconName = focused ? focused : unfocused;
      break;
  }
  // return <Image resizeMode="contain" style={{ width: 24, height: 18 }} source={iconName} />;
  return <Text>{routeName}</Text>;
};

const TabStack = createBottomTabNavigator(
  {
    [NavigationTabs.Folder]: HomeContainer,
    [NavigationTabs.Camera]: HomeContainer,
    [NavigationTabs.Video]: HomeContainer,
  },
  {
    initialRouteName: NavigationTabs.Camera,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => tabBarIcon(focused, tintColor, navigation),
    }),
    tabBarOptions: {
      activeTintColor: '#2a88f1',
      inactiveTintColor: '#a1a5a9',
    },
  },
);

export default TabStack;
