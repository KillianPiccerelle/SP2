import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export const CityLogo = (props = srcImg) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoSection} source={props.srcImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSection: {
    resizeMode: 'center',
  },
});

export default CityLogo;
