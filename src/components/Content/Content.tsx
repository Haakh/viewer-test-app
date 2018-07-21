import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import ContentStyleSheet from './ContentStyleSheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface ContentPropsType {
  style?: StyleProp<ViewStyle>;
}

export default class Content extends React.Component<ContentPropsType> {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={[ContentStyleSheet.container, this.props.style]}
        style={{ backgroundColor: 'grey' }}>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>{this.props.children}</View>
      </KeyboardAwareScrollView>
    );
  }
}
