import React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';
import {styles} from './PixelRatioScreenStyle';

export default function PixelRatioScreen({navigation}: {navigation: any}) {
  let screenWidth = Dimensions.get('window').width;

  const widthPercentageToDP = (widthPercent: any) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  const convertFontScale = (fontSize: any) => {
    const baseSize: any = Platform.select({ios: 414, android: 420});
    return fontSize * (screenWidth / baseSize);
  };

  return (
    <View style={styles.viewMain}>
      <View style={styles.viewHeader}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={[
            styles.pressble,
            {
              height: widthPercentageToDP('10%'),
              width: widthPercentageToDP('10%'),
            },
          ]}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={[
              styles.imageArrow,
              {
                height: widthPercentageToDP('5%'),
                width: widthPercentageToDP('5%'),
              },
            ]}
          />
        </Pressable>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: convertFontScale(16),
              marginRight: widthPercentageToDP('10%'),
            },
          ]}>
          FAQ
        </Text>
      </View>
      <View style={styles.backgroundView}>
        <Text
          style={[
            styles.textQuestion,
            {
              fontSize: convertFontScale(25),
              marginHorizontal: widthPercentageToDP('3%'),
            },
          ]}>
          Do I have to be at home/present during services?
        </Text>
        <View style={styles.lineView} />
        <ScrollView style={styles.scrollView}>
          <Text
            style={[
              styles.textAnswer,
              {
                fontSize: convertFontScale(15),
                marginHorizontal: widthPercentageToDP('5%'),
              },
            ]}>
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
