import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { NavigationRoute } from 'react-navigation';

const { width } = Dimensions.get('window');

interface TabBarStateTypes {
  left: Animated.Value;
  tabWidth: number;
}

export class TabBar extends React.Component<any, TabBarStateTypes> {
  public static defaultProps: Partial<any> = {
    initialActiveTabIndex: 0,
    top: false,
    height: 60,
    currentTab: null,
    containerStyle: {},
    tabButtonStyle: {},
    tabTextStyle: {},
    activeTabOpacity: 0.8,
    activeTabIndicatorHeight: 3,
    activeTabIndicatorColor: '#FE5F55',
    renderTabContent: undefined,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      left: new Animated.Value(0),
      tabWidth: width / this.props.navigation.state.routes.length,
    };
  }

  moveTo = (route: NavigationRoute, idx: any) => {
    const { navigation } = this.props;
    const currentIndex = navigation.state.index;
    if (currentIndex !== idx) {
      navigation.navigate(route.routeName);
    }

    Animated.timing(this.state.left, {
      toValue: this.state.tabWidth * idx,
    }).start();
  };

  renderTabBarButton = (route: NavigationRoute, idx: any) => {
    const { activeTintColor, inactiveTintColor, navigation, renderIcon, getLabelText } = this.props;
    const currentIndex = navigation.state.index;
    const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
    const label = getLabelText({ route, focused: currentIndex === idx, index: idx });
    return (
      <TouchableOpacity
        onPress={() => this.moveTo(route, idx)}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        key={route.routeName}>
        {renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx })}
        <Text style={{}}>{label}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const activeTabIndicatorHeight = 50;
    const activeTabIndicatorColor = 'blue';
    const { navigation } = this.props;
    const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton);

    return (
      <View style={{ flexDirection: 'row', height: 49 }}>
        {tabBarButtons}
        <View style={[styles.animatedLineContainer, { height: 5 }, { bottom: 0 }]}>
          <Animated.View
            style={[
              {
                height: activeTabIndicatorHeight,
                backgroundColor: activeTabIndicatorColor,
                marginLeft: this.state.left,
                width: this.state.tabWidth,
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: '#fff',
    position: 'relative',
    left: 0,
    right: 0,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedLineContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  tabText: {
    color: '#6B6868',
    fontSize: 16,
    fontWeight: '500',
    padding: 2,
  },
});
