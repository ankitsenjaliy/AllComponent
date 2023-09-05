import React from 'react';
import {
  Image,
  ImageBackground,
  TextInput,
  View,
  Pressable,
  Text,
} from 'react-native';
import {styles} from './TextInputScreenStyle';

export default function TextInputScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.viewMain}>
      <ImageBackground
        source={require('../../assets/images/signup_bg.png')}
        style={styles.backgroundImage}
        resizeMode="stretch">
        <View style={styles.viewHeader}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/images/arrow_back.png')}
              style={styles.imageArrow}
            />
          </Pressable>
          <Image
            source={require('../../assets/images/zippyLogo.png')}
            style={styles.imageZippyLogo}
          />
        </View>
        <View style={styles.mainView}>
          <View style={styles.backgroundView}>
            <Image
              source={require('../../assets/images/icon_email.png')}
              style={styles.leftIcon}
            />
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>
          <View style={styles.backgroundView}>
            <Image
              source={require('../../assets/images/icon_phone.png')}
              style={styles.leftIcon}
            />
            <TextInput style={styles.textInput} placeholder="Mobile No." />
          </View>
          <View style={styles.backgroundView}>
            <Image
              source={require('../../assets/images/icon_key.png')}
              style={styles.leftIcon}
            />
            <TextInput style={styles.textInput} placeholder="Password" />
          </View>
          <View style={styles.simpleView}>
            <Image
              source={require('../../assets/images/check.png')}
              style={styles.imageCheck}
            />
            <Text style={styles.textCondition}>Accept Terms & Conditions</Text>
          </View>
          <Pressable style={styles.buttonSignUp}>
            <Text style={styles.textSignUp}>SIGN UP</Text>
          </Pressable>
          <Text style={styles.textAlreadyAccount}>
            Already have an account?
          </Text>
          <Pressable
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
