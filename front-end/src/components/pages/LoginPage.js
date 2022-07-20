//React
import { View } from "react-native";

//Styles
import { LoginPageStyle } from "../../styles/LoginPageStyle";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";

export function LoginPage() {
  return (
    <View style={LoginPageStyle.container}>
      <View style={LoginPageStyle.mainCard}>
        <LoginInputs />
        <PrimaryAuthButton placeholder={"Sign In"} />
        <SecondaryAuthButton placeholder={"Sign Up"} />
      </View>
    </View>
  );
}
