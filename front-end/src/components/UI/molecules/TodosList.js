// Modules
import { FlatList, SafeAreaView } from "react-native";
//
// Components
import { Todo } from "../atoms/Todo";

export function TodosList({ todos }) {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => <Todo index={index} props={item} />}
      />
    </SafeAreaView>
  );
}
