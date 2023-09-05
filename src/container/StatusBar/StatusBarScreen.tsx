import React from 'react';
import {View, StatusBar, Pressable, Image, Text} from 'react-native';
import {styles} from './StatusBarScreenStyle';

export default function StatusBarScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewStatusBar}>
        <StatusBar
          backgroundColor={'red'}
          barStyle={'dark-content'}
          translucent={true}
        />
      </View>
      <View style={styles.viewHeader}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.pressble}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={styles.imageArrow}
          />
        </Pressable>
        <Text style={styles.textTitle}>STATUS BAR</Text>
        <View style={styles.pressble} />
      </View>
      <View style={styles.viewBackground} />
    </View>
  );
}
