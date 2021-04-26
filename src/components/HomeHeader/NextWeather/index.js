import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import SvgUri from "react-native-svg-uri";

export const NextWeather = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.weather}>
        <SvgUri
          width="30"
          height="30"
          source={{
            uri: "https://www.svgrepo.com/show/30310/sun.svg",
          }}
        />
        <Text style={styles.date}>10/03</Text>
        <Text style={styles.temperature}>16°C</Text>
      </View>
      <View style={styles.weather}>
        <SvgUri
          width="30"
          height="30"
          source={{
            uri: "https://www.svgrepo.com/show/30310/sun.svg",
          }}
        />
        <Text style={styles.date}>10/03</Text>
        <Text style={styles.temperature}>16°C</Text>
      </View>
      <View style={styles.weather}>
        <SvgUri
          width="30"
          height="30"
          source={{
            uri: "https://www.svgrepo.com/show/30310/sun.svg",
          }}
        />
        <Text style={styles.date}>10/03</Text>
        <Text style={styles.temperature}>16°C</Text>
      </View>
      <View style={styles.weather}>
        <SvgUri
          width="30"
          height="30"
          source={{
            uri: "https://www.svgrepo.com/show/30310/sun.svg",
          }}
        />
        <Text style={styles.date}>10/03</Text>
        <Text style={styles.temperature}>16°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  weather: {
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 9,
    fontWeight: "bold",
  },
});

export default NextWeather;
