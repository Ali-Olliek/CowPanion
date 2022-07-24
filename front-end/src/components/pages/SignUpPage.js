// Modules
import { useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
// Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { SignupInputs } from "../UI/molecules/SignupInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { ErrorBox } from "../UI/atoms/ErrorBox";

export function SignUpPage({ navigation }) {
  // States
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [PhoneNumber, setPhoneNumberInput] = useState("");
  const [NameInput, setNameInput] = useState("");
  const [userType, setUserType] = useState(1); // Default As Farmer
  const [displayError, setDisplayError] = useState(true);
  // Create Request to Server
  const data = {
    name: NameInput,
    email: EmailInput,
    phone_number: PhoneNumber,
    password: PasswordInput,
    user_type: userType,
  };

  const signUpURL = "http://10.0.2.2:8000/api/v1/signUp/";
  if (
    NameInput === "" ||
    EmailInput === "" ||
    PhoneNumber === "" ||
    PasswordInput === ""
  ) {
  }

  const signUp = () => {
    axios({
      url: signUpURL,
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: data,
    }).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        navigation.navigate("SignIn");
      } else {
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 1500);
      }
    });
  };
  return (
    <View style={AuthStyles.container}>
      <View style={AuthStyles.mainCard}>
        <SignupInputs
          props={{
            setEmailInput,
            setNameInput,
            setPasswordInput,
            setUserType,
            setPhoneNumberInput,
          }}
        />
        {displayError ? <ErrorBox description={"Sign Up Failed"} /> : null}
        <PrimaryAuthButton
          action={signUp}
          navigation={navigation}
          nav={"SignIn"}
          placeholder={"Sign Up"}
        />
        <SecondaryAuthButton
          navigation={navigation}
          nav={"SignIn"}
          placeholder={"Sign In"}
        />
      </View>
    </View>
  );
}
