import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CityLogo from "./CityLogo";
import CurrentWeather from "./CurrentWeather";
import NextWeather from "./NextWeather";

const HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <CityLogo srcImg={require("../../../assets/logo.png")} />
      <CurrentWeather />
      <NextWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "#FFBF00",
  },
});

export default HomeHeader;
