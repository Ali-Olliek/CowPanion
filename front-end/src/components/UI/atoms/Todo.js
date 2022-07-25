//
// Modules
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, TouchableWithoutFeedback } from "react-native";
//
// Styles
import { Todos } from "../../../styles/TodosStyle";

export function Todo({ props, index }) {
  //
  // States and variables
  const { token } = useSelector((state) => state.user.user);
  const [id, setId] = useState(null);

  //
  // Calculate time left in days

  let dueDate = new Date(props.fields.due_time);
  let today = Date.now();
  const diffTime = Math.abs(dueDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //
  // create Request
  const deleteReminderUrl = `http://10.0.2.2:8000/api/v1/deleteReminder/?reminder_id=${id}`;
  const data = { reminder_id: id };
  const deleteReminder = () => {
    axios({
      url: deleteReminderUrl,
      method: "GET",
      headers: { Authorization: token },
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  };
  // when Id changes
  useEffect(() => {
    if (id) {
      deleteReminder();
    }
  }, [id]);

  return (
    <View style={Todos.TodoContainer}>
      <View style={Todos.TodoInfo}>
        <Text style={Todos.TodoDesc}>{props.fields.task_title}</Text>
        <Text style={Todos.TodoDue}>Due in: {diffDays} days</Text>
      </View>
      <View style={Todos.TodoAction}>
        <TouchableWithoutFeedback
          onPress={() => {
            setId(props.pk);
          }}
        >
          <Text style={Todos.Check}>✓</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
