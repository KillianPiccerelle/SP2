import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';

const UrgenceCallListItem = ({item}) => {
  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:' + item.phoneNumber;
    } else {
      phoneNumber = 'telprompt:' + item.phoneNumber;
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <TouchableOpacity onPress={() => makeCall()}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <SvgUri
            style={{width: '60%', height: '60%'}}
            source={{uri: item.image}}
          />
        </View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{item.libelle}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    borderRadius: 10,
  },
  imageContainer: {
    width: 40,
    height: 40,
  },
  containerCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default UrgenceCallListItem;
