import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import SvgUri from "react-native-svg-uri";

export const CurrentWeather = (props) => {
  return (
    <View style={styles.container}>
      <SvgUri
        width="55"
        height="55"
        source={{ uri: "https://www.svgrepo.com/show/30310/sun.svg" }}
      />
      <Text style={styles.date}>10/03</Text>
      <Text style={styles.temperature}>16°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 90,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  temperature: {
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default CurrentWeather;
