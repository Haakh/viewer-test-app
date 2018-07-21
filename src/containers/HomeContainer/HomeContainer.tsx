import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { HomeContainerPropsType, HomeContainerStateType, Styles } from '.';
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
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
      <Content style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text>ICO</Text>
          <Text> Lorem Ipsum - Dolor sit</Text>
        </View>
        <View style={Styles.galleryContainer}>
          <Text style={{ color: '#fff' }}>Hello</Text>
        </View>
        <View style={{ flex: 2.3 }}>
          <ScrollView horizontal contentContainerStyle={Styles.previewListContainer}>
            {data.map((item, index) => (
              <TouchableOpacity key={index} style={Styles.listItem}>
                <Text style={{ color: '#fff' }}>Hi</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={Styles.cameraButton}>
          <TouchableOpacity style={Styles.cameraButtonOuterLayer}>
            <View style={Styles.cameraButtonInnerLayer} />
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}
