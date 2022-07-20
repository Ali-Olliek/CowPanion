import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Todos } from "../../../styles/TodosStyle";

export function Todo({ description, due }) {
  return (
    <View style={Todos.TodoContainer}>
      <View style={Todos.TodoInfo}>
        <Text>{description}</Text>
        <Text>{due}</Text>
      </View>
      <View style={Todos.TodoAction}>
        <TouchableWithoutFeedback>
          <Text>✓</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text>X</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
