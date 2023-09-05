import React from 'react';
import {View, Pressable, Alert, Text} from 'react-native';
import {styles} from './AlertScreenStyle';

export default function AlertScreen() {
  const SimpleAlert = () =>
    Alert.alert('Alert', 'Simple Alert', [
      {
        text: 'Okay',
        onPress: () => console.log('Okay Pressed'),
      },
    ]);

  const AlertWithTwoOption = () =>
    Alert.alert(
      'Alert',
      'Two Option Alert',
      [
        {
          text: 'Okay',
          onPress: () => console.log('Okay Pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      //   {
      //     cancelable: true,
      //   },
    );

  const AlertWithThreeOption = () =>
    Alert.alert('Alert', 'Three Option Alert', [
      {
        text: 'Yes',
        onPress: () => console.log('Yes Pressed'),
      },
      {
        text: 'No',
        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
    ]);

  return (
    <View style={styles.viewMain}>
      <Pressable style={styles.buttonAlert} onPress={SimpleAlert}>
        <Text style={styles.textAlert}>Simple Alert</Text>
      </Pressable>
      <Pressable style={styles.buttonAlert} onPress={AlertWithTwoOption}>
        <Text style={styles.textAlert}>Alert With Two Option</Text>
      </Pressable>
      <Pressable style={styles.buttonAlert} onPress={AlertWithThreeOption}>
        <Text style={styles.textAlert}>Alert With Three Option</Text>
      </Pressable>
    </View>
  );
}
