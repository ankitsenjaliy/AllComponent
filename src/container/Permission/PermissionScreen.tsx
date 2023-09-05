import React from 'react';
import {
  PermissionsAndroid,
  View,
  Alert,
  TouchableOpacity,
  Text,
  Linking,
  Platform,
} from 'react-native';
import {styles} from './PermissionScreenStyle';

import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export default function PermissionScreen() {
  const alertLocation = () => {
    Alert.alert('Alert', 'You can use the Location', [
      {
        text: 'Okay',
        onPress: () => console.log('Okay Pressed'),
      },
    ]);
  };

  const alertCameraGranted = () => {
    Alert.alert('Alert', 'You can use the Camera', [
      {
        text: 'Okay',
        onPress: () => console.log('Okay Pressed'),
      },
    ]);
  };

  const alertCameraUnavailable = () => {
    Alert.alert('Alert', 'Unavailable', [
      {
        text: 'Okay',
        onPress: () => console.log('Okay Pressed'),
      },
    ]);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'React Native Code App needs access to your Location',
          buttonNegative: 'Cancel',
          buttonPositive: 'Okay',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alertLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestPermission = (permission: any) => {
    request(permission).then(result => {
      if (result === RESULTS.UNAVAILABLE) {
        alertCameraUnavailable();
      } else if (result === RESULTS.GRANTED) {
        alertCameraGranted();
      }
    });
  };

  return (
    <View style={styles.viewMain}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={requestLocationPermission}>
        <Text style={styles.text}>Location Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={Linking.openSettings}>
        <Text style={styles.text}>Open Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          if (Platform.OS === 'ios') {
            requestPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
          } else {
            requestPermission(PERMISSIONS.ANDROID.CAMERA);
          }
        }}>
        <Text style={styles.text}>Camera Permission</Text>
      </TouchableOpacity>
    </View>
  );
}
