import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ContainerView: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // rowGap: 10,
    position: 'absolute',
  },
  RedBox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  YellowBox: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  GreenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  OrangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});
