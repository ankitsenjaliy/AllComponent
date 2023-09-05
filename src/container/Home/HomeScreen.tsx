import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Button,
  ScrollView,
  Alert,
  BackHandler,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {styles} from './HomeScreenStyle';

export default function HomeScreen({navigation}: {navigation: any}) {
  const route = useRoute();

  useEffect(() => {
    const onBackPress = () => {
      console.log('route.name', route.name);
      if (route.name === 'Home') {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      } else {
        return false;
      }
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => subscription.remove();
  });

  let screenWidth = Dimensions.get('window').width;

  const widthPercentageToDP = (widthPercent: any) => {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  return (
    <View style={styles.viewMain}>
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button title="Text" onPress={() => navigation.navigate('Text')} />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Text Input"
            onPress={() => navigation.navigate('TextInput')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button title="Image" onPress={() => navigation.navigate('Image')} />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Flat List"
            onPress={() => navigation.navigate('FlatList')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Switch"
            onPress={() => navigation.navigate('Switch')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Section List"
            onPress={() => navigation.navigate('SectionList')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button title="Alert" onPress={() => navigation.navigate('Alert')} />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Refresh Control"
            onPress={() => navigation.navigate('RefreshControl')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Activity Indicator"
            onPress={() => navigation.navigate('ActivityIndicator')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Status Bar"
            onPress={() => navigation.navigate('StatusBar')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Safe Area View"
            onPress={() => navigation.navigate('SafeAreaView')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Touchable Opacity"
            onPress={() => navigation.navigate('TouchableOpacity')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Cloneable Counter"
            onPress={() => navigation.navigate('CloneableCounter')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Back Handler(Android)"
            onPress={() => navigation.navigate('BackHandler')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Toast(Android)"
            onPress={() => navigation.navigate('Toast')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Action Sheet(IOS)"
            onPress={() => navigation.navigate('ActionSheet')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Drawer Layout(Android)"
            onPress={() => navigation.navigate('DrawerLayout')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Permission"
            onPress={() => navigation.navigate('Permission')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button title="Share" onPress={() => navigation.navigate('Share')} />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Slider"
            onPress={() => navigation.navigate('Slider')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Dimension"
            onPress={() => navigation.navigate('Dimension')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30%')},
          ]}>
          <Button
            title="Pixel Ratio"
            onPress={() => navigation.navigate('PixelRatio')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30')},
          ]}>
          <Button
            title="Flex Box"
            onPress={() => navigation.navigate('FlexBox')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30')},
          ]}>
          <Button
            title="Animated"
            onPress={() => navigation.navigate('Animated')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30')},
          ]}>
          <Button
            title="Navigation"
            onPress={() => navigation.navigate('Navigation')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30')},
          ]}>
          <Button
            title="Web View"
            onPress={() => navigation.navigate('WebView')}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {marginHorizontal: widthPercentageToDP('30')},
          ]}>
          <Button
            title="Gesture"
            onPress={() => navigation.navigate('Gesture')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
