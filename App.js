import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./App.styles";
import { ImageOption, Button } from "./src/components";
import data from "./assets/data/data";

const App = () => {
  const [isSelected, setIsSelected] = useState(null);

  const onBtnPress = () => {};

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{data.question}</Text>
      <View style={styles.optionsContainer}>
        {data.options.map((option) => {
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
    </View>
  );
};

export default App;
