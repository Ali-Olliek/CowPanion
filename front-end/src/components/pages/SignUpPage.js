import { View } from "react-native";
import { SignupInputs } from "../UI/molecules/SignupInputs";
import { PrimaryAuthButton } from "../UI/atoms/Auth/PrimaryAuthButton";
import { SecondaryAuthButton } from "../UI/atoms/Auth/SecondaryAuthButton";

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
