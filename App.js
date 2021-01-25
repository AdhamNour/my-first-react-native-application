import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { value: goalTitle, id: Math.random().toString() },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) =>{
      return currentCourseGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add NEW Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler}  modalVisible={isAddMode} cancelHandler ={cancelGoalAdditionHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemdata) => (
          <GoalItem title={itemdata.item.value} OnDelete={() =>removeGoalHandler(itemdata.item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
