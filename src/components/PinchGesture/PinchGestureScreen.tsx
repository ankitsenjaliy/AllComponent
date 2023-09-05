import React from 'react';
import {View, Animated} from 'react-native';
import {
  GestureHandlerRootView,
  HandlerStateChangeEvent,
  PinchGestureHandler,
  PinchGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {styles} from './PinchGestureScreenStyle';

export default function PinchGestureScreen() {
  const scale = new Animated.Value(1);

  const handleGesture = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const onGestureStateChange = (
    event: HandlerStateChangeEvent<PinchGestureHandlerEventPayload>,
  ): void => {
    scale.setValue(event.nativeEvent.scale);
  };

  let scaleStyle = {
    transform: [
      {perspective: 200},
      {
        scale: scale,
      },
    ],
  };
  return (
    <View style={[styles.container]}>
      <GestureHandlerRootView>
        <PinchGestureHandler
          onGestureEvent={handleGesture}
          onHandlerStateChange={onGestureStateChange}>
          <Animated.View style={[styles.circle, scaleStyle]} />
        </PinchGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}
