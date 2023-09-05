import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// import CustomDrawer from '../../components/CustomDrawer';

import NavigationScreen from '../../container/Navigation/NavigationScreen';
import FlatListScreen from '../FlatList/FlatListScreen';
import SectionListScreen from '../SectionList/SectionListScreen';

const Drawer = createDrawerNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="NavigationDrawer">
        <Drawer.Screen name="NavigationDrawer" component={NavigationScreen} />
        <Drawer.Screen name="FlatListDrawer" component={FlatListScreen} />
        <Drawer.Screen name="SectionListDrawer" component={SectionListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
