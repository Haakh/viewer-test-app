import * as React from 'react';
import { Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { ButtonStyleSheet } from '.';

export interface ButtonPropsType {
  title: string;
  onClick: (event: any) => void;
  style?: any;
  type: ButtonStylesType;
  textStyle?: any;
  disabled?: boolean;
}

export enum ButtonStylesType {
  Primary = 'primary',
  Hollow = 'hollow',
  Default = 'default',
  Disabled = 'disabled',
}

export const Button: React.SFC<ButtonPropsType> = (props: ButtonPropsType) => {
  const getTypeStyle = (type: ButtonStylesType) => {
    switch (type) {
      case ButtonStylesType.Primary:
        return ButtonStyleSheet.primary;
      case ButtonStylesType.Hollow:
        return ButtonStyleSheet.hollow;
      case ButtonStylesType.Default:
        return {};
    }
  };
  return (
    <TouchableOpacity
      onPress={props.onClick}
      disabled={props.disabled}
      style={[ButtonStyleSheet.buttonContainer, getTypeStyle(props.type), props.style]}>
      <Text style={[ButtonStyleSheet.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
