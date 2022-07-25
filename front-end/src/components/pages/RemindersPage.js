// Modules
import axios from "axios";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableHighlight } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { Todos } from "../../styles/TodosStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { TodosList } from "../UI/molecules/TodosList";

export function RemindersPage({ navigation }) {
  //
  // States and variables
  const [remindersList, setRemindersList] = useState([]);
  const { id, token } = useSelector((state) => state.user.user);

  //
  // Create Request
  const getRemindersUrl = `http://10.0.2.2:8000/api/v1/farmReminders/?user_id=${id}`;
  const data = { user_id: id };
  const getReminders = () => {
    axios({
      method: "GET",
      url: getRemindersUrl,
      data: data,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (response.data.code === 200) {
          setRemindersList(response.data.reminders);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  // Call on Navigation
  useFocusEffect(
    useCallback(() => {
      getReminders();
    }, [])
  );

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
      {remindersList.length !== 0 ? (
        <TodosList todos={remindersList} />
      ) : (
        <View style={Todos.empty}>
          <Text>No Reminders to Display</Text>
        </View>
      )}
    </>
  );
}
