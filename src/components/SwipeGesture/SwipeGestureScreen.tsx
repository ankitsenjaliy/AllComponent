import React from 'react';
import {Text, Animated, View} from 'react-native';
import {
  Swipeable,
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler';
import {styles} from './SwipeGestureScreenStyle';

const SwipeGestureScreen = () => {
  return (
    <View style={styles.ContainerView}>
      <GestureHandlerRootView>
        <Swipeable renderLeftActions={renderLeftActions}>
          <Text style={styles.title}>Hello</Text>
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

const renderLeftActions = () => {
  return (
    <View style={styles.leftItem}>
      <RectButton>
        <Animated.Text style={styles.leftItemText}>Archive</Animated.Text>
      </RectButton>
    </View>
  );
};

export default SwipeGestureScreen;
