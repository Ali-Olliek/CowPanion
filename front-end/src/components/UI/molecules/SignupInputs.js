import { View, Image, Text, TouchableHighlight } from "react-native";
import { AuthStyles } from "../../../styles/AuthPagesStyle";
import { useState } from "react";
import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";

export function SignupInputs({ props }) {
  // States and Variables
  const [farmer, setFarmer] = useState(false);
  const [vet, setVet] = useState(false);
  return (
    <View>
      <NameInput setNameInput={props.setNameInput} />
      <EmailInput setEmailInput={props.setEmailInput} />
      <PhoneNumberInput setPhoneNumberInput={props.setPhoneNumberInput} />
      <PasswordInput setPasswordInput={props.setPasswordInput} />
      <View style={AuthStyles.imagesContainer}>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={(e) => [
            props.setUserType(2),
            setFarmer(true),
            setVet(false),
          ]}
        >
          <Image
            style={farmer ? AuthStyles.imageActive : AuthStyles.image}
            source={require("../../../assets/images/farmer.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={() => [props.setUserType(3), setFarmer(false), setVet(true)]}
        >
          <Image
            style={vet ? AuthStyles.imageActive : AuthStyles.image}
            source={require("../../../assets/images/veterinarian.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
