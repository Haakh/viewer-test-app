import { createStackNavigator } from 'react-navigation';
import { AppStackRoutes } from '../../utils/RouteNames';
import TabStack from './TabStack';

const AppStack = createStackNavigator(
  {
    [AppStackRoutes.TabStack]: {
      screen: TabStack,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: AppStackRoutes.TabStack,
  },
);

export default AppStack;
