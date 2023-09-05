import React from 'react';
import {Share, View, TouchableOpacity, Text} from 'react-native';
import {styles} from './ShareScreenStyle';

export default function ShareScreen() {
  const onShareOption = async () => {
    try {
      const shareOption = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
        // url: 'https://reactnative.dev/docs/assets/p_cat1.png',
      });
      if (shareOption.action === Share.sharedAction) {
        if (shareOption.activityType) {
          console.log(shareOption.activityType);
        } else {
          console.log('Share');
        }
      } else if (shareOption.action === Share.dismissedAction) {
        console.log(Share.dismissedAction);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.viewMain}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onShareOption}>
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
