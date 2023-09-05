import React, {useEffect} from 'react';
import {View, Alert, BackHandler, Text} from 'react-native';
import {styles} from './BackHandlerScreenStyle';

export default function BackHandlerScreen() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Message', 'Are you sure you want to go back', [
        {
          text: 'Okay',
          onPress: () => BackHandler.exitApp(),
        },
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'destructive',
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.viewMain}>
      <Text style={styles.text}>Click Back button</Text>
    </View>
  );
}
