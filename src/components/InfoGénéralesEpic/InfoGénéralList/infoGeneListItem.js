import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

import SvgUri from 'react-native-svg-uri';

const InfoGeneListItem = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <SvgUri
          style={{
            width: 20,
            height: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
          source={{uri: 'https://www.svgrepo.com/show/17165/folder.svg'}}
        />
        <Text style={styles.title}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',

    alignItems: 'center',
    width: 300,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#024893',
  },
  title: {
    color: 'white',
  },
});

export default InfoGeneListItem;
