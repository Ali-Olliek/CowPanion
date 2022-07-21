import { View, Text, Image } from "react-native";
import { AuthStyles } from "../../../styles/AuthPagesStyle";
import {
  PasswordInput,
  EmailInput,
  NameInput,
  PhoneNumberInput,
} from "../atoms";

export function SignupInputs() {
  return (
    <View>
      <NameInput />
      <EmailInput />
      <PhoneNumberInput />
      <PasswordInput />
      <View style={AuthStyles.imagesContainer}>
        <Image
          style={AuthStyles.image}
          source={require("../../../assets/images/farmer.png")}
        ></Image>
        <Image
          style={AuthStyles.image}
          source={require("../../../assets/images/veterinarian.png")}
        ></Image>
      </View>
    </View>
  );
}
