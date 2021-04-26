import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import SvgUri from "react-native-svg-uri";

const MenuItem = (props = [srcImg, bgColor, routeName, title]) => {
  const navigation = useNavigation();

  const goTo = () =>
    navigation.navigate(props.routeName, {
      titleHeader: props.title,
    });
  return (
    <Pressable style={styles.container} onPress={goTo}>
      <View name={props.routeName} backgroundColor={props.bgColor}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <SvgUri
            style={{ width: "60%", height: "60%" }}
            source={{ uri: props.srcImg }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  subContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MenuItem;
