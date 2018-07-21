import * as React from 'react';
import { View } from 'react-native';
import NavigationBarStyleSheet from './NavigationBarStyleSheet';
import { Button } from '..';
import { ButtonPropsType } from '../Button/Button';

interface NavBarRightPropsType {
  rightButtons?: ButtonPropsType[];
  style?: any;
  navigation: any;
}

const NavBarRight: React.SFC<NavBarRightPropsType> = (
  props: NavBarRightPropsType,
) => {
  if (props.rightButtons && props.rightButtons.length > 0) {
    return (
      <View style={props.style}>
        <View style={NavigationBarStyleSheet.rightContainer}>
          {props.rightButtons.map((button, index) => (
            <Button
              onClick={button.onClick}
              title={button.title}
              type={button.type}
              style={button.style}
              leftIcon={button.leftIcon}
              rightIcon={button.rightIcon}
              key={index}
              textStyle={button.textStyle} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={props.style}>
      {props.rightButtons && props.rightButtons.length > 0 ? (
        <View style={NavigationBarStyleSheet.rightContainer}>
          {props.rightButtons.map((button, index) => (
            <Button
              onClick={button.onClick}
              title={button.title}
              type={button.type}
              style={button.style}
              leftIcon={button.leftIcon}
              rightIcon={button.rightIcon}
              key={index}
              textStyle={button.textStyle} />
          ))}
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default NavBarRight;
