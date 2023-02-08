import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { styles } from "./App.styles";
import { Header, MultipleChoiceQuest, OpenEndedQuest } from "./src/components";
import data from "./assets/data/allData.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [indexQuest, setIndexQuest] = useState(0);
  const [currentQuest, setCurrentQuestion] = useState(data[indexQuest]);

  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState();

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

  const restart = () => {
    setLives(5);
    setIndexQuest(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrong answer");

      setLives((prev) => prev - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem("curQuest", indexQuest.toString());
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const loadedCurQuest = await AsyncStorage.getItem("curQuest");
    if (loadedCurQuest) {
      setIndexQuest(parseInt(loadedCurQuest));
    }
    setHasLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, indexQuest, hasLoaded]);

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header progress={indexQuest / data.length} lives={lives} />
      {currentQuest.type === "MULTIPLE_CHOICE" && (
        <MultipleChoiceQuest
          question={currentQuest}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuest.type === "OPEN_ENDED" && (
        <OpenEndedQuest
          question={currentQuest}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};

export default App;
