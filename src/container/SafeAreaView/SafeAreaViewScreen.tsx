import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './SafeAreaViewScreenStyle';

export default function SafeAreaViewScreen() {
  return (
    <View style={styles.contactArea}>
      <SafeAreaView style={styles.viewMain}>
        <Text style={styles.text}>Hello World</Text>
      </SafeAreaView>
    </View>
  );
}
