import * as React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import InputStyleSheet from './InputStyleSheet';

interface InputPropsType extends TextInputProps {
  placeholder: string;
  inputStyle?: any;
  label: string;
  labelStyle?: any;
  containerStyle?: any;
  onChangeText: (text: string) => void;
}

export default class Input extends React.Component<InputPropsType> {
  render() {
    // TODO: onChangeText and state: text
    return (
      <View style={[InputStyleSheet.container, this.props.containerStyle]}>
        <Text style={[InputStyleSheet.textStyle, this.props.labelStyle]}>{this.props.label}</Text>
        <TextInput
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChangeText}
          style={[InputStyleSheet.input, this.props.inputStyle]}
          {...this.props}
        />
      </View>
    );
  }
}
