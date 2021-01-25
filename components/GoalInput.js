import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        flex:1,
        alignItems: "center",
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        margin: 5,
    }
})

const goalInput = (props) => {
    const [enteredGoal, setEnterdGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnterdGoal(enteredText);
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnterdGoal("")
    }
    return ( 
        <Modal visible= {props.modalVisible} animationType = "slide">
        <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="CANCEL" color='red' onPress={props.cancelHandler} />
                <Button title="ADD" onPress={addGoalHandler} />
        </View>
        </Modal>
    );
}

export default goalInput;