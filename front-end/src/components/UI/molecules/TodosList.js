import { View, Text, FlatList, SafeAreaView } from "react-native";
import { Todo } from "../atoms/Todo";
import { Todos } from "../../../styles/TodosStyle";

export function TodosList() {
  const TodosArr = [
    {
      description: "Hello There",
      due: "Tomorrow",
    },
    {
      description: "Bye There",
      due: "Week ahead",
    },
  ];

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={TodosArr}
        renderItem={({ item }) => (
          <Todo description={item.description} due={item.due} />
        )}
      />
    </SafeAreaView>
  );
}
