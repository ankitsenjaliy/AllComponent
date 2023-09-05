import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  viewHeader: {
    width: '100%',
    // height: 150,
  },
  imageArrow: {
    height: 14,
    width: 16,
    marginTop: 40,
    marginLeft: 15,
  },
  imageZippyLogo: {
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  mainView: {
    marginTop: 50,
  },
  backgroundView: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20,
  },
  leftIcon: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginVertical: 18,
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: '#257EC7',
    marginLeft: 10,
    flex: 1,
  },
  simpleView: {
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  imageCheck: {
    height: 30,
    width: 30,
    marginLeft: 9,
  },
  textCondition: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  buttonSignUp: {
    height: 60,
    width: 160,
    backgroundColor: '#8BC443',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
  },
  textSignUp: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  textAlreadyAccount: {
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonLogin: {
    height: 50,
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  textLogin: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
  },
});
