import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SvgUri from 'react-native-svg-uri';

const HeaderWithoutBack = (
  props = [title, paddingLTitle, paddingRTitle, bgColor, srcImg],
) => {
  return (
    <View style={styles.container}>
      <View style={{alignContent: 'space-between', flexDirection: 'row'}}>
        <SvgUri style={{width: 50, height: 50}} source={{uri: props.srcImg}} />
      </View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
          paddingLeft: props.paddingLTitle,
          paddingRight: props.paddingRTitle,
          backgroundColor: props.bgColor,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
});

export default HeaderWithoutBack;
