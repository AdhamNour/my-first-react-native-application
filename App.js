import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnterdGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { value: enteredGoal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/* <ScrollView  >
        {courseGoals.map((goal, index) => (
          <View style={styles.listItem} key={index}>
            <Text >{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={courseGoals}
        renderItem={(itemdata) => (
          <View style={styles.listItem}>
            <Text>{itemdata.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "indigo",
    borderWidth: 1,
    marginVertical: 2,
  },
});
