import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import heart from "../../../assets/img/lives.jpeg";

export const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
