import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { styles } from "./App.styles";
import { MultipleChoiceQuest, OpenEndedQuest } from "./src/components";
import data from "./assets/data/data2";

const App = () => {
  const [indexQuest, setIndexQuest] = useState(0);
  const [currentQuest, setCurrentQuestion] = useState(data[indexQuest]);

  useEffect(() => {
    if (indexQuest >= data.length) {
      Alert.alert("You finished the quiz");
      setIndexQuest(0);
    } else {
      setCurrentQuestion(data[indexQuest]);
    }
  }, [indexQuest]);

  const onCorrect = () => {
    setIndexQuest((prev) => prev + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong answer");
  };

  return (
    <View style={styles.root}>
      {/* <MultipleChoiceQuest
        question={currentQuest}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}
      <OpenEndedQuest />
    </View>
  );
};

export default App;
