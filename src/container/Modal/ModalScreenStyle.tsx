import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#72cffa',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonShowModal: {
    height: 50,
    width: 250,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 12,
  },
  buttonHideModal: {
    height: 50,
    width: 250,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textModal: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalViewContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
