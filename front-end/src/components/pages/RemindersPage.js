// React
import { View, Text, TouchableHighlight } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { Todos } from "../../styles/TodosStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { TodosList } from "../UI/molecules/TodosList";

export function RemindersPage({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle style={styles.headertitle} title={"Todo List"} />
      </View>
      <View style={Todos.midSec}>
        <TouchableHighlight
          style={Todos.backButton}
          onPress={() => navigation.navigate("Home")}
          underlayColor={"white"}
        >
          <Text>back</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={Todos.createTodoButton}
          onPress={() => navigation.navigate("createReminder")}
          underlayColor={"white"}
        >
          <Text>Create Reminder</Text>
        </TouchableHighlight>
      </View>
      <TodosList />
    </>
  );
}
