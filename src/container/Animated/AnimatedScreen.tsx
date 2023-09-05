import React, {useRef} from 'react';
import {Animated, Button, Easing, Text, View} from 'react-native';
import {styles} from './AnimatedScreenStyle';

export default function AnimatedScreen() {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  const InAnimated = () => {
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const OutAnimated = () => {
    Animated.timing(AnimatedValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.ContainerView}>
      <Animated.View
        style={[
          styles.HeaderView,
          {
            opacity: AnimatedValue,
          },
        ]}>
        <Text style={styles.AnimatedText}>Animated View</Text>
      </Animated.View>
      <View style={styles.Button}>
        <Button title="Animated In" onPress={InAnimated} />
      </View>
      <View style={styles.Button}>
        <Button title="Animated Out" onPress={OutAnimated} />
      </View>
    </View>
  );
}
