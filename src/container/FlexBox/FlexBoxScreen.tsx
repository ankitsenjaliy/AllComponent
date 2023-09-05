import React from 'react';
import {View} from 'react-native';
import {styles} from './FlexBoxScreenStyle';

export default function FlexBoxScreen() {
  return (
    <View style={styles.ContainerView}>
      <View style={styles.RedBox} />
      <View style={styles.YellowBox} />
      <View style={styles.GreenBox} />
      <View style={styles.OrangeBox} />
    </View>
  );
}
