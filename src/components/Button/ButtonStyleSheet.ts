import { StyleSheet } from 'react-native';

export const ButtonStyleSheet = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 16,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
  },
  primary: {
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderRadius: 2,
  },
  hollow: {
    width: 71,
    height: 33,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'blue',
  },
});
