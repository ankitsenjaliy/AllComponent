import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from './WebViewScreenStyle';

export default function WebViewScreen() {
  return (
    <View style={styles.MainView}>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </View>
  );
}
