import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
  },
  circle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: '#c00000',
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
  leftItem: {
    flex: 1,
    backgroundColor: '#76a21e',
    justifyContent: 'center',
  },
});
