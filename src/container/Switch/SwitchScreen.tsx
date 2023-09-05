import React, {useState} from 'react';
import {View, Switch, Text} from 'react-native';
import {styles} from './SwitchScreenStyle';

export default function SwitchScreen() {
  const [switchValue, setSwitchValue] = useState<any>(false);

  const toggleSwitch = (value: Boolean) => {
    setSwitchValue(value);
    console.log(value);
  };

  return (
    <View style={styles.viewMain}>
      <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
      <Switch
        style={styles.switch}
        onValueChange={toggleSwitch}
        value={switchValue}
      />
    </View>
  );
}
