import { View, Image, Text, TouchableHighlight } from "react-native";
import { useState } from "react";
import { AuthStyles } from "../../../styles/AuthPagesStyle";

import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";

export function SignupInputs({ props }) {
  const [datePickerDisplay, setDatePickerDisplay] = useState(false);
  return (
    <View>
      <NameInput setName={props.setNameInput} />
      <EmailInput setEmail={props.setEmailInput} />
      <PhoneNumberInput setPhoneNumber={props.setPhoneNumberInput} />
      <PasswordInput setPassword={props.setPasswordInput} />
      <View style={AuthStyles.imagesContainer}>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={() => props.setUserType(1)}
        >
          <Image
            style={AuthStyles.image}
            source={require("../../../assets/images/farmer.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={() => props.setUserType(2)}
        >
          <Image
            style={AuthStyles.image}
            source={require("../../../assets/images/veterinarian.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
