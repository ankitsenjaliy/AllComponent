import React from 'react';
import {Animated, View} from 'react-native';
import {styles} from './PanGestureScreenStyle';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

export default function PanGestureScreen() {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  let circleTransformStyle;
  circleTransformStyle = {
    transform: [
      {
        translateY: translateY,
      },
      {
        translateX: translateX,
      },
    ],
  };

  return (
    <View style={[styles.container]}>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={handleGesture}>
          <Animated.View style={[styles.circle, circleTransformStyle]} />
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}
