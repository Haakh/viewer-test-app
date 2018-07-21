import { createBottomTabNavigator } from 'react-navigation';
import { NavigationTabs } from '../../utils/RouteNames';
import { HomeContainer } from '..';
import { TabBar } from '../../components';

const TabStack = createBottomTabNavigator(
  {
    [NavigationTabs.Folder]: HomeContainer,
    [NavigationTabs.Camera]: HomeContainer,
    [NavigationTabs.Video]: HomeContainer,
  },
  {
    initialRouteName: NavigationTabs.Camera,
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#2a88f1',
      inactiveTintColor: '#a1a5a9',
    },
  },
);

export default TabStack;
