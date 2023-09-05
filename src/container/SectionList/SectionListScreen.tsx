import React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  SectionList,
  SafeAreaView,
} from 'react-native';
import {styles} from './SectionListScreenStyle';

export default function SectionListScreen({navigation}: {navigation: any}) {
  const countryDetails = [
    {
      id: 1,
      title: 'A',
      data: ['Australia', 'Afghanistan', 'America'],
    },
    {
      id: 2,
      title: 'B',
      data: ['Bangladesh', 'Brazil', 'Bhutan'],
    },
    {
      id: 3,
      title: 'C',
      data: ['Canada', 'China', 'Cayman Islands'],
    },
    {
      id: 4,
      title: 'D',
      data: ['Denmark'],
    },
    {
      id: 5,
      title: 'E',
      data: ['England', 'Egypt', 'Ethiopia'],
    },
    {
      id: 6,
      title: 'F',
      data: ['France'],
    },
    {
      id: 7,
      title: 'G',
      data: ['Germany', 'Greenland'],
    },
    {
      id: 8,
      title: 'H',
      data: ['Hong Kong'],
    },
    {
      id: 9,
      title: 'I',
      data: ['India', 'Ireland', 'Iceland', 'Iraq', 'Italy'],
    },
    {
      id: 10,
      title: 'J',
      data: ['Japan', 'Jordan'],
    },
    {
      id: 11,
      title: 'K',
      data: ['Korea', 'Kyrgyzstan'],
    },
    {
      id: 12,
      title: 'L',
      data: ['Libyan Arab Jamahiriya', 'Lithuania'],
    },
    {
      id: 13,
      title: 'M',
      data: [
        'Maldives',
        'Malaysia',
        'Mexico',
        'Myanmar',
        'Marshall Islands',
        'Mongolia',
      ],
    },
    {
      id: 14,
      title: 'N',
      data: ['Nepal', 'New Zealand', 'Netherlands', 'Norfolk Island', 'Norway'],
    },
    {
      id: 15,
      title: 'O',
      data: ['Oman'],
    },
    {
      id: 16,
      title: 'P',
      data: ['Poland', 'Pakistan'],
    },
    {
      id: 17,
      title: 'Q',
      data: ['Qatar'],
    },
    {
      id: 18,
      title: 'R',
      data: ['Russian Federation'],
    },
    {
      id: 19,
      title: 'S',
      data: [
        'South Africa',
        'Sri Lanka',
        'Saudi Arabia',
        'Singapore',
        'Swaziland',
        'Switzerland',
      ],
    },
    {
      id: 20,
      title: 'T',
      data: ['Thailand', 'Tonga', 'Turkey'],
    },
    {
      id: 21,
      title: 'U',
      data: ['United States', 'United Kingdom'],
    },
    {
      id: 22,
      title: 'V',
      data: ['Venezuela', 'Vanuatu'],
    },
    {
      id: 23,
      title: 'Z',
      data: ['Zimbabwe', 'Zambia'],
    },
  ];

  const ItemSeparator = () => {
    return (
      // separator Style
      <View style={styles.SeparatorStyle} />
    );
  };

  const renderItemSection = ({section: {title}}: {section: any}) => {
    return (
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.itemListView}>
        <Text style={styles.itemListText}>{item}</Text>
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
        <Text style={styles.textTitle}>SECTION LIST</Text>
      </View>
      <View style={styles.backgroundView}>
        <SectionList
          sections={countryDetails}
          ItemSeparatorComponent={ItemSeparator}
          renderSectionHeader={renderItemSection}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
