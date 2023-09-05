import React, {useState} from 'react';
import {View, Slider, Text} from 'react-native';
import {styles} from './SliderScreenStyle';

export default function SliderScreen() {
  const [isSliderValue, setIsSliderValue] = useState(0);

  return (
    <View style={styles.viewMain}>
      <Text style={styles.text}>Value of slider is = {isSliderValue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="red"
        maximumTrackTintColor="green"
        thumbTintColor="yellow"
        step={1}
        value={isSliderValue}
        onValueChange={sliderValue => setIsSliderValue(sliderValue)}
      />
    </View>
  );
}
