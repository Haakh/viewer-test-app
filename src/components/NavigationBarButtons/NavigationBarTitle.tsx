import * as React from 'react';
import { View, Text } from 'react-native';
import NavigationBarStyleSheet from './NavigationBarStyleSheet';

interface NavBarTitlePropsType {
  navigation: any;
  title: string;
  style?: any;
}

const NavBarTitle: React.SFC<NavBarTitlePropsType> = (
  props: NavBarTitlePropsType,
) => {
  return (
    <View style={NavigationBarStyleSheet.container}>
      <View style={NavigationBarStyleSheet.title}>
        <Text style={[props.style, NavigationBarStyleSheet.title]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default NavBarTitle;
