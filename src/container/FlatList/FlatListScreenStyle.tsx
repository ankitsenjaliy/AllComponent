import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: '#8BC443',
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginRight: 40,
  },
  backgroundView: {
    flex: 1,
    height: '100%',
    marginTop: 20,
    backgroundColor: '#F5F6F8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listView: {
    height: 80,
    fontSize: 20,
    margin: 10,
    padding: 10,
    color: 'black',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#00000029',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 5,
    marginTop: 3,
  },
  detailsView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textName: {
    fontSize: 15,
    fontFamily: 'Times New Roman',
    color: 'red',
  },
  textEmailId: {
    fontSize: 13,
    fontFamily: 'Times New Roman',
    color: 'blue',
  },
});
