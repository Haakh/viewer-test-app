import * as React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { LoginContainer, AppStack } from '..';
import AuthLoading from '../AuthLoading/AuthLoading';
import { AuthStackRoutes, RootStackRoutes } from '../../utils';

const AuthStack = createStackNavigator(
  {
    [AuthStackRoutes.Login]: LoginContainer,
  },
  {
    initialRouteName: AuthStackRoutes.Login,
  },
);

const RootStack = createSwitchNavigator(
  {
    [RootStackRoutes.AuthLoading]: AuthLoading,
    [RootStackRoutes.App]: AppStack,
    [RootStackRoutes.AuthStack]: AuthStack,
  },
  {
    initialRouteName: RootStackRoutes.AuthLoading,
  },
);

export default class AppRouter extends React.Component {
  render() {
    return <RootStack />;
  }
}
