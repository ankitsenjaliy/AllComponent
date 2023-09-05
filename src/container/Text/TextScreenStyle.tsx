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
    // backgroundColor: 'yellow',
    // top: 40,
    // left: 15,
    // position: 'absolute',
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
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundView: {
    height: '100%',
    flex: 1,
    backgroundColor: '#F5F6F8',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textQuestion: {
    color: '#6F6F6F',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    marginTop: 10,
    marginLeft: 50,
  },
  lineView: {
    height: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#BBC2CC',
  },
  scrollView: {
    flex: 1,
  },
  textAnswer: {
    color: '#6F6F6F',
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
