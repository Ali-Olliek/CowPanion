// Modules

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRedux } from "../../redux/features/user";

//Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";
import { LoginPageStyle } from "../../styles";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { ErrorBox } from "../UI/atoms/ErrorBox";
import { MainHeaderTitle } from "../UI/atoms";
import { buttons } from "../../styles/ButtonsStyle";

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
  const loginUrl = "api/v1/signIn/";

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
        // Store user_Type in Async Storage
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
        // Dispatch information to Redux Store
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
    <View style={LoginPageStyle.BG}>
      <View style={LoginPageStyle.mainContainer}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/images/Logo.png")}
        />
        <Text style={LoginPageStyle.logoTitle}>COWPANION</Text>
        <View style={AuthStyles.center}>
          <LoginInputs
            setEmailInput={setEmailInput}
            setPasswordInput={setPasswordInput}
          />
          {displayError ? <ErrorBox description={"Failed to Login"} /> : null}

          <PrimaryAuthButton
            style={buttons.LoginPrimary}
            setSendRequest={setSendRequest}
            placeholder={"Sign In"}
          />
          <View>
            <Text style={LoginPageStyle.secondaryText}>
              Don't have an account?
              <Text
                style={LoginPageStyle.link}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text> </Text>
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
``;
