import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './TouchableOpacityScreenStyle';

export default function TouchableOpacityScreen() {
  const [counter, setCounter] = useState(0);

  const IncrementCount = () => {
    if (counter < 30) {
      setCounter(counter + 1);
    }
  };

  const DecrementCount = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.ContainerView}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={DecrementCount}>
        <Image
          source={require('../../assets/images/icon_minus.png')}
          style={styles.TouchableOpacityImage}
        />
      </TouchableOpacity>
      <Text style={styles.CountText}>Count = {counter}</Text>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={IncrementCount}>
        <Image
          source={require('../../assets/images/icon_plus.png')}
          style={styles.TouchableOpacityImage}
        />
      </TouchableOpacity>
    </View>
  );
}
