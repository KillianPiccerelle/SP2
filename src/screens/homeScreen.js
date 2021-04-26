import * as React from "react";
import { StyleSheet, View } from "react-native";

import HomeHeader from "../components/HomeHeader";
import Menu from "../components/Menu";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

export default HomeScreen;
