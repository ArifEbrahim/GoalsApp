import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your goal'/>
        <Button title='Add goal' />
      </View>
      <View>
        <Text>List of goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});
