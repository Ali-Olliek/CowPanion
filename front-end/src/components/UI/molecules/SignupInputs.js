import { View, Image, Text, TouchableHighlight } from "react-native";
import { AuthStyles } from "../../../styles/AuthPagesStyle";

import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";

export function SignupInputs({ props }) {
  return (
    <View>
      <NameInput setNameInput={props.setNameInput} />
      <EmailInput setEmailInput={props.setEmailInput} />
      <PhoneNumberInput setPhoneNumberInput={props.setPhoneNumberInput} />
      <PasswordInput setPasswordInput={props.setPasswordInput} />
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
