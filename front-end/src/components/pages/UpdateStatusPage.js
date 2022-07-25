// Modules
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// Components
import { MainHeaderTitle } from "../UI/atoms";

// Styles
import { styles } from "../../styles/AnimalsListStyle";
import { infoStyles } from "../../styles";
import { statusStyles } from "../../styles/StatusStyle";
import { createMed } from "../../styles";

//
//
export function UpdateStatusPage({ navigation, route }) {
  //
  // States and Variables
  const { id } = route.params;
  const [status, setStatus] = useState("");
  const changeStatusUrl = "http://10.0.2.2:8000/api/v1/animal/update/";
  const data = { status: status, id: id };
  const { token } = useSelector((state) => state.user.user);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  //
  // Create Request
  const changeStatus = () => {
    axios({
      method: "POST",
      url: changeStatusUrl,
      data: data,
      headers: {
        Authorization: token,
        "content-type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.data.code === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigation.goBack();
        }, 1000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }
    });
  };

  //
  // Main
  return (
    <>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animal Information"} />
      </View>
      <TouchableHighlight
        style={infoStyles.backButton}
        onPress={() => navigation.goBack()}
        underlayColor={"white"}
      >
        <Text>back</Text>
      </TouchableHighlight>
      {success ? (
        <View style={infoStyles.messageContainer}>
          <Text style={[infoStyles.message, infoStyles.success]}>
            Status Updated
          </Text>
        </View>
      ) : null}
      {error ? (
        <View style={infoStyles.messageContainer}>
          <Text style={[infoStyles.message, infoStyles.error]}>
            Update Failed
          </Text>
        </View>
      ) : null}
      <View style={statusStyles.main}>
        <Text style={statusStyles.prompt}>
          Press a status and hit save to update
        </Text>
        <View style={statusStyles.container}>
          <TouchableHighlight
            onPress={() => setStatus("pregnant")}
            style={[statusStyles.PR, statusStyles.circle]}
          >
            <Text>Pregnant</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setStatus("Dry")}
            style={[statusStyles.D, statusStyles.circle]}
          >
            <Text>Dry</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setStatus("Heifer")}
            style={[statusStyles.H, statusStyles.circle]}
          >
            <Text>Heifer</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setStatus("Quarantined")}
            style={[statusStyles.Q, statusStyles.circle]}
          >
            <Text>Quarantined</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={createMed.actions}>
        <TouchableWithoutFeedback onPress={changeStatus}>
          <View style={createMed.save}>
            <Text>Save</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={createMed.cancel}>
            <Text>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
