// React
import { View } from "react-native";

// Components
import { SignupInputs } from "../UI/molecules/SignupInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";

export function SignUpPage() {
  return (
    <View>
      <View>
        <SignupInputs />
        <PrimaryAuthButton placeholder={"Sign Up"} />
        <SecondaryAuthButton placeholder={"Sign In"} />
      </View>
    </View>
  );
}
