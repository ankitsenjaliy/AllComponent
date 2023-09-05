import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ContainerView: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
    marginVertical: 20,
  },
  leftItem: {
    flex: 1,
    backgroundColor: '#76a21e',
    justifyContent: 'center',
  },
  leftItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  listItem: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
    flex: 1,
    height: 60,
    backgroundColor: '#fff',
  },
});
