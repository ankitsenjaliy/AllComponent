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
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  imageArrow: {
    tintColor: 'white',
  },
  textTitle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
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
    fontFamily: 'Times New Roman',
    marginTop: 10,
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
    fontFamily: 'Times New Roman',
    marginTop: 10,
  },
});
