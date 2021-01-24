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

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { value: goalTitle, id: Math.random().toString() },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) =>{
      return currentCourseGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
