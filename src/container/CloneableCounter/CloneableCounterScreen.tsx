import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CloneableScreen from './CloneableScreen';
import {styles} from './CloneableCounterScreenStyle';

export default function CloneableCounterScreen() {
  const [counters, setCounters] = useState([<CloneableScreen key={0} />]);
  const [counterId, setCounterId] = useState(1);

  const AddCounter = () => {
    const newCounters = [...counters, <CloneableScreen key={counterId} />];
    setCounters(newCounters);
    setCounterId(counterId + 1);
  };

  return (
    <View style={styles.ContainerView}>
      {counters.map((counter, index) => (
        <View key={index}>{counter}</View>
      ))}
      <TouchableOpacity style={styles.TouchableOpacity} onPress={AddCounter}>
        <Text style={styles.TouchableOpacityText}>Add Counter</Text>
      </TouchableOpacity>
    </View>
  );
}
