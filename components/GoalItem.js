import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "indigo",
        borderWidth: 1,
        marginVertical: 2,
    },
});

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.OnDelete} >
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
};

export default GoalItem;
