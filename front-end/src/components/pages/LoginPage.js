//React
import { View, Image } from "react-native";
import axios from "axios";

//Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { useState } from "react";

export function LoginPage({ navigation }) {
  // States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Constructing Data Request
  const data = { email: emailInput, password: passwordInput };

  const loginUrl = "http://10.0.2.2:8000/api/v1/signIn/";

  const login = () => {
    axios({
      method: "POST",
      url: loginUrl,
      headers: { "content-type": "multipart/form-data" },
      data: data,
    }).then((response) => {
      console.log(response.data);
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
