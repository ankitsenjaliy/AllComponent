import React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {styles} from './FlatListScreenStyle';

export default function FlatListScreen({navigation}: {navigation: any}) {
  const userDetails = [
    {
      name: 'Jonathan Paterson',
      email: 'jonathan.paterson@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Benjamin Parsons',
      email: 'benjamin.parsons@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      name: 'Jan Sanderson',
      email: 'jan.sanderson@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      name: 'Sue Harris',
      email: 'sue.harris@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      name: 'Christian Thomson',
      email: 'christian.thomson@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      name: 'Isaac Sharp',
      email: 'isaac.sharp@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      name: 'Theresa Wilson',
      email: 'theresa.wilson@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      name: 'Connor Hunter',
      email: 'connor.hunter@gmail.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar8.png',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.listView}>
        <Image style={styles.profileImage} source={{uri: item.image}} />
        <View style={styles.detailsView}>
          <Text style={styles.textName}>{'Name = ' + item.name}</Text>
          <Text style={styles.textEmailId}>{'Email Id = ' + item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.viewMain}>
      <View style={styles.viewHeader}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.pressble}>
          <Image
            source={require('../../assets/images/arrow_back.png')}
            style={styles.imageArrow}
          />
        </Pressable>
        <Text style={styles.textTitle}>FLAT LIST</Text>
      </View>
      <View style={styles.backgroundView}>
        <FlatList data={userDetails} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}
