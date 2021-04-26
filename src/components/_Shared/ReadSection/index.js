import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReadSection = (props = [title, subtitle, srcImg]) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logoSection} source={props.srcImg} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 340,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#024893',
  },
  logoSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 29,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default ReadSection;
