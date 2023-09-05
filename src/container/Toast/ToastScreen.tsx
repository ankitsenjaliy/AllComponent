import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {styles} from './ToastScreenStyle';

export default function ToastScreen() {
  const showSimpleToast = () => {
    ToastAndroid.show('Simple Toast', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.show(
      'Toast With Gravity',
      ToastAndroid.SHORT,
      // ToastAndroid.TOP,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.show(
      'Toast with Gravity & Offset',
      ToastAndroid.LONG,
      // ToastAndroid.BOTTOM,
      // 20,
      // 25,
    );
  };

  return (
    <View style={styles.viewMain}>
      <TouchableOpacity style={styles.button} onPress={showSimpleToast}>
        <Text style={styles.textButton}>Simple Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={showToastWithGravity}>
        <Text style={styles.textButton}>Toast with Gravity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={showToastWithGravityAndOffset}>
        <Text style={styles.textButton}>Toast with Gravity & Offset</Text>
      </TouchableOpacity>
    </View>
  );
}
