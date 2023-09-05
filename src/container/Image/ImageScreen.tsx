import React from 'react';
import {Image, View, Dimensions, PixelRatio} from 'react-native';
import {styles} from './ImageScreenStyle';

export default function ImageScreen() {
  let screenWidth = Dimensions.get('window').width;
  const widthPercentageToDP = (widthPercent: any) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  return (
    <View style={styles.viewMain}>
      <Image
        source={require('../../assets/images/naturalImage.jpeg')}
        style={[
          styles.image,
          {
            height: widthPercentageToDP('50%'),
            width: widthPercentageToDP('50%'),
            borderRadius: widthPercentageToDP('50%'),
          },
        ]}
      />
    </View>
  );
}
