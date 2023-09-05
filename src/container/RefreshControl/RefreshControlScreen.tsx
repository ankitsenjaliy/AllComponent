import React, {useCallback, useState} from 'react';
import {View, RefreshControl, ScrollView, Text} from 'react-native';
import {styles} from './RefreshControlScreenStyle';

export default function RefreshControlScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.viewMain}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'red'}
          />
        }>
        <View style={styles.backgroundView}>
          <Text style={styles.textAnswer}>
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
        </View>
      </ScrollView>
    </View>
  );
}
