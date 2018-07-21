import * as React from 'react';
import { View } from 'react-native';
import {
  NavigationBarTitle,
  Input,
  Content,
  Button,
  ButtonStylesType,
  Message,
} from '../../components';
import { LoginContainerPropsType, LoginContainerStateType, LoginContainerStyles } from '.';
import { RootStackRoutes } from '../../utils';

export default class LoginContainer extends React.Component<
  LoginContainerPropsType,
  LoginContainerStateType
> {
  constructor(props: LoginContainerPropsType) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
    };
  }

  static navigationOptions = ({ navigation }: any) => ({
    headerLeft: <View style={{ flex: 0 }} />,
    headerTitle: <NavigationBarTitle title="Sign In" navigation={navigation} />,
  });

  onSignIn = () => {
    this.props.navigation.navigate(RootStackRoutes.App);
  };

  setPassword = (password: string) => {
    this.setState({ password });
  };

  setEmail = (email: string) => {
    this.setState({ email });
  };

  render() {
    return (
      <Content style={{ justifyContent: 'flex-start' }}>
        <Input
          placeholder="Email address"
          label="Enter your registered email address"
          keyboardType="email-address"
          onChangeText={this.setEmail}
          labelStyle={{ color: 'grey' }}
        />
        <Input
          placeholder="Password"
          label="Enter your password"
          secureTextEntry
          onChangeText={this.setPassword}
          labelStyle={{ color: 'grey' }}
        />
        <Button
          title="Forgot password? Reset here"
          type={ButtonStylesType.Default}
          textStyle={{ color: 'blue' }}
          style={LoginContainerStyles.resetButton}
          onClick={() => this.props.navigation.navigate('')}
        />
        <Button
          title="SignIn"
          style={{ flex: 1 }}
          type={ButtonStylesType.Primary}
          textStyle={{ color: 'white' }}
          onClick={this.onSignIn}
        />
        <View style={{ flex: 5 }} />
      </Content>
    );
  }
}
