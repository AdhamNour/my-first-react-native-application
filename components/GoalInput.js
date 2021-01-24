import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const styles = StyleSheet.create({
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
    }
})

const goalInput = (props) => {
    const [enteredGoal, setEnterdGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnterdGoal(enteredText);
    };
    return ( 
        <Modal visible= {props.modalVisible} animationType = "slide">
        <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
        </Modal>
    );
}

export default goalInput;