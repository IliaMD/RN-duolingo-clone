import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export const Button = ({ text, onPress, disabled = false }) => {
  return (
    <Pressable
      style={[styles.container, disabled ? styles.disableContainer : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
