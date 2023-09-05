import React from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import {styles} from './TextScreenStyle';

export default function TextScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewHeader}>
        <Pressable
          onPress={() => {
            // console.log('Home');
            navigation.navigate('Home');
          }}
          style={styles.pressble}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={styles.imageArrow}
          />
        </Pressable>
        <Text style={styles.textTitle}>FAQ</Text>
        <View style={styles.pressble} />
      </View>
      <View style={styles.backgroundView}>
        <Text style={styles.textQuestion}>
          Do I have to be at home/present during services?
        </Text>
        <View style={styles.lineView} />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.textAnswer}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Nulla quis lorem ut libero
            malesuada feugiat. Nulla porttitor accumsan tincidunt. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
            erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
            molestie malesuada. Proin eget tortor risus. Proin eget tortor
            risus. Donec sollicitudin molestie malesuada. Donec sollicitudin
            molestie malesuada. Sed porttitor lectus nibh. Donec rutrum congue
            leo eget malesuada. Proin eget tortor risus. malesuada feugiat.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Nulla quis lorem ut libero malesuada feugiat. Nulla
            porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada. Proin eget tortor risus. Proin eget tortor risus. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget
            malesuada. Proin eget tortor risus.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
