import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteGoal(props.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
