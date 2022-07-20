import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Todos } from "../../../styles/TodosStyle";

export function Todo({ description, due }) {
  return (
    <View style={Todos.TodoContainer}>
      <View style={Todos.TodoInfo}>
        <Text style={Todos.TodoDesc}>{description}</Text>
        <Text style={Todos.TodoDue}>{due}</Text>
      </View>
      <View style={Todos.TodoAction}>
        <TouchableWithoutFeedback>
          <Text style={Todos.Check}>✓</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
