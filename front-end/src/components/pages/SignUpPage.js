// Modules
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { loginRedux } from "../../redux/features/user";
// Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";
import { createMed } from "../../styles";
// Components
import { SignupInputs } from "../UI/molecules/SignupInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";
import { ErrorBox } from "../UI/atoms/ErrorBox";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";

export function SignUpPage({ navigation }) {
  // States and Variables

  // Inputs
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [PhoneNumber, setPhoneNumberInput] = useState("");
  const [NameInput, setNameInput] = useState("");
  const [userType, setUserType] = useState(2); // Default As Farmer
  const [sendRequest, setSendRequest] = useState(false);

  // Errors
  const [userExists, setUserExists] = useState(false);
  const [emptyInputs, setEmptyInput] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  // DatePicker
  const [date, setDate] = useState(new Date());
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);

  // Redux
  const dispatch = useDispatch();

  // Functions and Handlers
  const showDatePicker = () => {
    setDatePickerDisplay(true);
  };
  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePickerDisplay(false);
  };

  //
  // Create Request to Server
  const data = {
    name: NameInput,
    email: EmailInput,
    phone_number: PhoneNumber,
    password: PasswordInput,
    user_type: userType,
    DOB: date,
  };

  useEffect(() => {
    if (sendRequest === true) {
      signUp();
    }
  }, [sendRequest]);

  const signUpURL = "http://10.0.2.2:8000/api/v1/signUp/";

  const signUp = (event) => {
    if (
      (NameInput === "" ||
        EmailInput === "" ||
        PhoneNumber === "" ||
        PasswordInput === "") &&
      sendRequest === true
    ) {
      setEmptyInput(true);
      setTimeout(() => {
        setEmptyInput(false);
      }, 1500);
      return;
    }
    axios({
      url: signUpURL,
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      data: data,
    })
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("OnBoarding");
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
      })
      .catch((error) => {
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
        }, 1500);
      });
  };

  //
  // Date Picker
  const dateComponent = () => {
    return (
      <SafeAreaView>
        <View style={createMed.MainContainer}>
          <Text style={createMed.text}>{date.toDateString()}</Text>

          {datePickerDisplay && (
            <DateTimePickerAndroid
              show
              value={date}
              mode={"date"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              dateFormat={"year"}
              onChange={onDateSelected}
            />
          )}

          {!datePickerDisplay && (
            <View style={createMed.button}>
              <Button
                title="Date of Birth"
                color="#2A432A"
                onPress={showDatePicker}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  };

  //
  // Main
  return (
    <View style={AuthStyles.container}>
      {displayError ? <ErrorBox description={"Sign Up failed"} /> : null}
      {userExists ? <ErrorBox description={"User Already Exists"} /> : null}
      {emptyInputs ? <ErrorBox description={"Please fill all fields"} /> : null}
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
        {dateComponent()}
        <PrimaryAuthButton
          action={null}
          setSendRequest={setSendRequest}
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
