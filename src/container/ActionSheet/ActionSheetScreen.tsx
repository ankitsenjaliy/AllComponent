import React from 'react';
import {View, ActionSheetIOS, TouchableOpacity, Text} from 'react-native';
import {styles} from './ActionSheetScreenStyle';

export default function ActionSheetScreen() {
  const onClickButton = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Edit', 'Save', 'Delete'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 3,
        userInterfaceStyle: 'light',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          console.log('Cancel');
        } else if (buttonIndex === 1) {
          console.log('Edit');
        } else if (buttonIndex === 2) {
          console.log('Save');
        } else if (buttonIndex === 3) {
          console.log('Delete');
        }
      },
    );

  return (
    <View style={styles.viewMain}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onClickButton}>
        <Text style={styles.text}>Button</Text>
      </TouchableOpacity>
    </View>
  );
}
