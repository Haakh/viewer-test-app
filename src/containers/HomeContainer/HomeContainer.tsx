import * as React from 'react';
import { View, Text } from 'react-native';
import { HomeContainerPropsType, HomeContainerStateType, HomeContainerStyles } from '.';
import { NavigationBarTitle, Content } from '../../components';

export default class HomeContainer extends React.Component<
  HomeContainerPropsType,
  HomeContainerStateType
> {
  constructor(props: HomeContainerPropsType) {
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

  render() {
    return (
      <Content style={{ justifyContent: 'flex-start' }}>
        <View>
          <Text>Hello</Text>
        </View>
      </Content>
    );
  }
}
