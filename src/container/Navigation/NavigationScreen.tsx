import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {styles} from './NavigationScreenStyle';

export default function NavigationScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewHeader}>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={styles.pressble}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.imageArrow}
          />
        </Pressable>
        <View style={styles.pressble} />
      </View>
      <View style={styles.backgroundView} />
    </View>
  );
}
