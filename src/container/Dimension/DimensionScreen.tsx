import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './DimensionScreenStyle';

export default function DimensionScreen() {
  const [isHeight, setIsHeight] = useState<any>('');
  const [isWidth, setIsWidth] = useState<any>('');

  useEffect(() => {
    setIsHeight(Dimensions.get('window').height);
    setIsWidth(Dimensions.get('window').width);
  }, []);

  const messageAlert = () =>
    Alert.alert('Height = ' + isHeight + '\nWidth = ' + isWidth);

  return (
    <View style={styles.viewMain}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={messageAlert}>
        <Text style={styles.text}>Show Screen Height and Width</Text>
      </TouchableOpacity>
    </View>
  );
}
