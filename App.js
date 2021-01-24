import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal,setEnterdGoal]= useState('');
  const [courseGoals,setCourseGoals]= useState([]);

  const  goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText)
  }

  const addGoalHandler = () =>{
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText = {goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress = {addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal,index) => <Text key ={index}>{goal}</Text>)}
      </View>
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
  input:{
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  }
});
