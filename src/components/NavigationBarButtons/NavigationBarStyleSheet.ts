import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  activeTitle: {
    color: 'red',
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 16,
  },
});
