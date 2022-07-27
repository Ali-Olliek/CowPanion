// Modules

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRedux, saveUserData } from "../../redux/features/user";
//Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { ErrorBox } from "../UI/atoms/ErrorBox";

// Login Page
export function LoginPage({ navigation }) {
  //
  // Hooks
  const dispatch = useDispatch();

  const saveUserData = async (userId) => {
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
      })
    );
  };
  // States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  // Constructing Data Request
  const data = { email: emailInput, password: passwordInput };
  const loginUrl = "http://10.0.2.2:8000/api/v1/signIn/";

  useEffect(() => {
    login();
  }, [sendRequest]);

  // Login Function
  const login = () => {
    if (emailInput === "" || passwordInput === "") {
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
      }, 1500);
    }
    axios({
      method: "POST",
      url: loginUrl,
      headers: { "content-type": "multipart/form-data" },
      data: data,
    }).then((response) => {
      if (response.data.code === 200) {
        dispatch(
          loginRedux({
            id: response.data.user_id,
            name: response.data.user_name,
            token: response.data.token,
            userType: response.data.user_type,
            isLogged: true,
          })
        );
        saveUserData(response.data.user_id);
        navigation.navigate("LandingPage");
      } else {
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 1500);
      }
    });
  };

  // Page

  return (
    <View style={AuthStyles.container}>
      <View>
        <Image></Image>
      </View>
      <View style={AuthStyles.mainCard}>
        <LoginInputs
          setEmailInput={setEmailInput}
          setPasswordInput={setPasswordInput}
        />
        {displayError ? <ErrorBox description={"Log In Failed"} /> : null}
        <PrimaryAuthButton
          setSendRequest={setSendRequest}
          navigation={navigation}
          nav={"LandingPage"}
          placeholder={"Sign In"}
        />
        <SecondaryAuthButton
          navigation={navigation}
          nav={"SignUp"}
          placeholder={"Sign Up"}
        />
      </View>
    </View>
  );
}
