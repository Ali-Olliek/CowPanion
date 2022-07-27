// Modules

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRedux } from "../../redux/features/user";

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

  // States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  // Constructing Data Request
  const data = { email: emailInput, password: passwordInput };
  const loginUrl = "http://10.0.2.2:8000/api/v1/signIn/";

  useEffect(() => {
    if (sendRequest === true) {
      login();
    }
  }, [sendRequest]);

  // Login Function
  const login = () => {
    if ((emailInput === "" || passwordInput === "") && sendRequest === true) {
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
        if (response.data.user_type == 2) {
          navigation.navigate("LandingPage");
        } else if (response.data.user_type == 3) {
          navigation.navigate("Animals");
        }
        const storeData = async () => {
          try {
            await AsyncStorage.setItem(
              "userType",
              String(response.data.user_type)
            );
          } catch (error) {
            console.log(error);
          }
        };
        storeData();
        dispatch(
          loginRedux({
            id: response.data.user_id,
            name: response.data.user_name,
            token: response.data.token,
            userType: response.data.user_type,
            isLogged: true,
          })
        );
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
          placeholder={"Sign In"}
        />
        <SecondaryAuthButton
          nav={"SignUp"}
          navigation={navigation}
          placeholder={"Sign Up"}
        />
      </View>
    </View>
  );
}
