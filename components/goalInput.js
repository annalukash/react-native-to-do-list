import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInpulHandler = (enterdeText) => {
        setEnteredGoal(enterdeText);
    };

    const onAddGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInpulHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={onAddGoalHandler} />
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
    }
});

export default GoalInput;
