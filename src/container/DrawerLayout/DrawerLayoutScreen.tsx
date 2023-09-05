import React, {useRef} from 'react';
import {DrawerLayoutAndroid, View, Button, Text} from 'react-native';
import {styles} from './DrawerLayoutScreenStyle';

export default function DrawerLayoutScreen() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View style={styles.viewMain}>
      <Text style={styles.text}>Close Drawer</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.viewMain}>
        <Text style={styles.text}>Open Drawer</Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}
