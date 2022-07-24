// Modules
import { View, Image } from "react-native";
import axios from "axios";
import { useDispatch } from "react-redux";
//Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { useState } from "react";
import { ErrorBox } from "../UI/atoms/ErrorBox";
import { loginRedux } from "../../redux/features/user";

// Login Page
export function LoginPage({ navigation }) {
  //
  // Hooks
  const dispatch = useDispatch();

  // States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [displayError, setDisplayError] = useState(false);

  // Constructing Data Request
  const data = { email: emailInput, password: passwordInput };
  const loginUrl = "http://10.0.2.2:8000/api/v1/signIn/";

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
          action={login}
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
