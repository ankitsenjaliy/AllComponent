import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: '#8BC443',
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  pressble: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  imageArrow: {
    height: 14,
    width: 16,
    tintColor: 'white',
  },

  backgroundView: {
    height: '100%',
    flex: 1,
    backgroundColor: '#F5F6F8',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
