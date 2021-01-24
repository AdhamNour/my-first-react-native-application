import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

export default GoalItem;
