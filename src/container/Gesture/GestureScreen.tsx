import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './GestureScreenStyle';

export default function GestureScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.viewMain}>
      <View style={[styles.buttonContainer]}>
        <Button
          title="Pan Gesture Handler"
          onPress={() => navigation.navigate('PanGestureHandler')}
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <Button
          title="Pinch Gesture Handler"
          onPress={() => navigation.navigate('PinchGestureHandler')}
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <Button
          title="Single Tap Gesture Handler"
          onPress={() => navigation.navigate('SingleTapGestureHandler')}
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <Button
          title="Double Tap Gesture Handler"
          onPress={() => navigation.navigate('DoubleTapGestureHandler')}
        />
      </View>
      <View style={[styles.buttonContainer]}>
        <Button
          title="Swipe Gesture Handler"
          onPress={() => navigation.navigate('SwipeGestureHandler')}
        />
      </View>
    </View>
  );
}
