import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 0,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    justifyContent: 'flex-start',
  },
  galleryContainer: {
    flex: 10,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    height: width / 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: width / 5,
    backgroundColor: '#555',
  },
  cameraButton: { flex: 3, alignItems: 'center', justifyContent: 'center' },
  cameraButtonOuterLayer: {
    height: width / 7,
    width: width / 7,
    borderRadius: width / 14,
    borderWidth: 0.7,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#777',
  },
  cameraButtonInnerLayer: {
    height: width / 9,
    width: width / 9,
    backgroundColor: '#fff',
    borderRadius: width / 18,
    borderWidth: 0.7,
    borderColor: '#777',
  },
});
