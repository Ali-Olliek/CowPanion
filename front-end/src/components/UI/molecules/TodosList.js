// Modules
import { FlatList, SafeAreaView, Text } from "react-native";
import { Todos } from "../../../styles";
import { InputStyles } from "../../../styles/InputStyles";
//
// Components
import { Todo } from "../atoms/Todo";

export function TodosList({ todos, setDeleted }) {
  return (
    <SafeAreaView style={Todos.container}>
      <Text style={InputStyles.prompt}>UPCOMING TASKS</Text>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <Todo setDeleted={setDeleted} index={index} props={item} />
        )}
      />
    </SafeAreaView>
  );
}
