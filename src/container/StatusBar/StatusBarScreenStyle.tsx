import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: '#8BC443',
  },
  viewStatusBar: {
    height: 25,
    backgroundColor: 'red',
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
  textTitle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  viewBackground: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
