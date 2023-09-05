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
  sectionHeaderView: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F8FDF0',
  },
  sectionHeaderText: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 5,
  },
  itemListView: {
    padding: 10,
  },
  itemListText: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    color: '#6F6F6F',
  },
  SeparatorStyle: {
    height: 1,
    backgroundColor: '#BBC2CC',
    marginHorizontal: 10,
  },
});
