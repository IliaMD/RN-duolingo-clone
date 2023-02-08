import React, { useState } from "react";
import { Text, View } from "react-native";
import { ImageOption } from "../ImageOption/ImageOption";
import { Button } from "../Button/Button";
import { styles } from "./styles";

export const MultipleChoiceQuest = ({ question, onCorrect, onWrong }) => {
  const [isSelected, setIsSelected] = useState(null);

  const onBtnPress = () => {
    if (isSelected.correct) {
      setIsSelected(null);
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => {
          return (
            <ImageOption
              key={option.id}
              image={option.image}
              text={option.text}
              isSelected={isSelected?.id === option.id}
              onPress={() => setIsSelected(option)}
            />
          );
        })}
      </View>
      <Button text="Check" onPress={onBtnPress} disabled={!isSelected} />
    </>
  );
};
