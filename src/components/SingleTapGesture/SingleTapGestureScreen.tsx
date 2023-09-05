import React from 'react';
import {View, Alert} from 'react-native';
import {
  TapGestureHandler,
  State,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {styles} from './SingleTapGestureScreenStyle';

export default function SingleTapGestureScreen() {
  const onSingleTapEvent = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert('Hey Single Tap!');
    }
  };

  return (
    <GestureHandlerRootView>
      <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
        <View style={styles.square} />
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
}
