import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { styles } from "./styles";
import duo from "../../../assets/img/duo.png";
import { Button } from "../Button/Button";

export const OpenEndedQuest = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onBtnPress = () => {
    if (input.toLowerCase().trim() === question.answer.toLowerCase().trim()) {
      onCorrect();
      setInput("");
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={duo} style={styles.mascot} />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <TextInput
        value={input}
        placeholder="Type in English"
        style={styles.textInput}
        onChangeText={setInput}
        textAlignVertical="top"
        multiline
      />

      <Button text="Check" onPress={onBtnPress} disabled={!input.trim()} />
    </>
  );
};
