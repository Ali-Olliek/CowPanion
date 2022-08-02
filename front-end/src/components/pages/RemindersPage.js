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
import { Feather } from "@expo/vector-icons";

export function RemindersPage({ navigation }) {
  //
  // States and variables
  const [remindersList, setRemindersList] = useState([]);
  const { id, token } = useSelector((state) => state.user.user);
  //
  // Create Request
  const getRemindersUrl = `api/v1/farmReminders/?user_id=${id}`;
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
        <MainHeaderTitle
          navigation={navigation}
          nav={"createReminder"}
          style={styles.headertitle}
          subtitle={"Stay organized"}
          title={"Reminders"}
        />
      </View>
      <View style={Todos.midSec}></View>
      {remindersList.length !== 0 ? (
        <TodosList todos={remindersList} />
      ) : (
        <View style={Todos.empty}>
          <Feather name="bell" size={64} color="#2E302F" />
          <Text style={Todos.messagePrimary}>NO REMINDERS</Text>
          <Text style={Todos.messageSecondary}>
            You currently have no reminders, create one by pressing the + sign
          </Text>
        </View>
      )}
    </>
  );
}
