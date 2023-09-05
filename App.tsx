import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/container/Home/HomeScreen';
import TextScreen from './src/container/Text/TextScreen';
import TextInputScreen from './src/container/TextInput/TextInputScreen';
import FlatListScreen from './src/container/FlatList/FlatListScreen';
import SwitchScreen from './src/container/Switch/SwitchScreen';
import SectionListScreen from './src/container/SectionList/SectionListScreen';
import AlertScreen from './src/container/Alert/AlertScreen';
import ModalScreen from './src/container/Modal/ModalScreen';
import RefreshControlScreen from './src/container/RefreshControl/RefreshControlScreen';
import ActivityIndicatorScreen from './src/container/ActivityIndicator/ActivityIndicatorScreen';
import StatusBarScreen from './src/container/StatusBar/StatusBarScreen';
import SafeAreaViewScreen from './src/container/SafeAreaView/SafeAreaViewScreen';
import TouchableOpacityScreen from './src/container/TouchableOpacity/TouchableOpacityScreen';
import CloneableCounter from './src/container/CloneableCounter/CloneableCounterScreen';
import BackHandlerScreen from './src/container/BackHandler/BackHandlerScreen';
import ImageScreen from './src/container/Image/ImageScreen';
import ToastScreen from './src/container/Toast/ToastScreen';
import ActionSheetScreen from './src/container/ActionSheet/ActionSheetScreen';
import DrawerLayoutScreen from './src/container/DrawerLayout/DrawerLayoutScreen';
import PermissionScreen from './src/container/Permission/PermissionScreen';
import ShareScreen from './src/container/Share/ShareScreen';
import SliderScreen from './src/container/Slider/SliderScreen';
import DimensionScreen from './src/container/Dimension/DimensionScreen';
import PixelRatioScreen from './src/container/PixelRatio/PixelRatioScreen';
import FlexBoxScreen from './src/container/FlexBox/FlexBoxScreen';
import AnimatedScreen from './src/container/Animated/AnimatedScreen';
import NavigationScreen from './src/container/Navigation/NavigationScreen';
import WebViewScreen from './src/container/WebVIew/WebViewScreen';
import GestureScreen from './src/container/Gesture/GestureScreen';
import PanGestureScreen from './src/components/PanGesture/PanGestureScreen';
import PinchGestureScreen from './src/components/PinchGesture/PinchGestureScreen';
import SingleTapGestureScreen from './src/components/SingleTapGesture/SingleTapGestureScreen';
import DoubleTapGestureScreen from './src/components/DoubleTapGesture/DoubleTapGestureScreen';
import SwipeGestureScreen from './src/components/SwipeGesture/SwipeGestureScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TextInput"
          component={TextInputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Switch"
          component={SwitchScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="SectionList"
          component={SectionListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alert"
          component={AlertScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="RefreshControl" component={RefreshControlScreen} />
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicatorScreen}
        />
        <Stack.Screen
          name="StatusBar"
          component={StatusBarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SafeAreaView"
          component={SafeAreaViewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TouchableOpacity"
          component={TouchableOpacityScreen}
        />
        <Stack.Screen name="CloneableCounter" component={CloneableCounter} />
        <Stack.Screen name="BackHandler" component={BackHandlerScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Toast" component={ToastScreen} />
        <Stack.Screen name="ActionSheet" component={ActionSheetScreen} />
        <Stack.Screen name="DrawerLayout" component={DrawerLayoutScreen} />
        <Stack.Screen name="Permission" component={PermissionScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
        <Stack.Screen name="Slider" component={SliderScreen} />
        <Stack.Screen name="Dimension" component={DimensionScreen} />
        <Stack.Screen
          name="PixelRatio"
          component={PixelRatioScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="Animated" component={AnimatedScreen} />
        <Stack.Screen
          name="Navigation"
          component={NavigationScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="WebView" component={WebViewScreen} />
        <Stack.Screen name="Gesture" component={GestureScreen} />
        <Stack.Screen name="PanGestureHandler" component={PanGestureScreen} />
        <Stack.Screen
          name="PinchGestureHandler"
          component={PinchGestureScreen}
        />
        <Stack.Screen
          name="SingleTapGestureHandler"
          component={SingleTapGestureScreen}
        />
        <Stack.Screen
          name="DoubleTapGestureHandler"
          component={DoubleTapGestureScreen}
        />
        <Stack.Screen
          name="SwipeGestureHandler"
          component={SwipeGestureScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
