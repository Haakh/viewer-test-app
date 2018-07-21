import * as React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { RootStackRoutes } from '../../utils/RouteNames';

interface AuthLoadingProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class AuthLoading extends React.Component<AuthLoadingProps> {
  componentDidMount() {
    // get currentUser from redux. here i'm hard coding data
    // this.props.navigation.navigate(
    //   this.props.currentUser ? RootStackRoutes.App : RootStackRoutes.AuthStack,
    // );
    this.props.navigation.navigate(true ? RootStackRoutes.App : RootStackRoutes.AuthStack);
  }

  render() {
    return (
      <View style={{ height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{ alignSelf: 'center', marginTop: 20 }}>Loading</Text>
      </View>
    );
  }
}
