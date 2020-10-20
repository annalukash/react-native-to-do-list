import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        if (!goalTitle.length) {
            return;
        }
        setCourseGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.key !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.container}>
            <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
            <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler}/>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
});
