import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './ActivityIndicatorScreenStyle';

export default function ActivityIndicatorScreen() {
  return (
    <View style={styles.viewMain}>
      <Text style={styles.titleText}>Activity Indicator</Text>
      <View style={styles.activityStyle}>
        <ActivityIndicator />
        <ActivityIndicator size="large" color="blue" />
        <ActivityIndicator size="small" color="green" />
      </View>
    </View>
  );
}
