import { View, Text, Touchable, TouchableHighlight } from "react-native";
import { MainHeaderTitle } from "../UI/atoms";
import { styles } from "../../styles/AnimalsListStyle";
import { BottomNavBarButtons } from "../UI/organisms";
import { TodosList } from "../UI/molecules/TodosList";
import { Todos } from "../../styles/TodosStyle";

export function RemindersPage() {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle style={styles.headertitle} title={"Todo List"} />
      </View>
      <View style={Todos.midSec}>
        <TouchableHighlight underlayColor={"white"}>
          <View style={Todos.backButton}>
            <Text>back</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={"white"}>
          <View style={Todos.createTodoButton}>
            <Text>Create Reminder</Text>
          </View>
        </TouchableHighlight>
      </View>
      <TodosList />
      <BottomNavBarButtons />
    </>
  );
}
