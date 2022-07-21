// React
import { View } from "react-native";

// Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { SignupInputs } from "../UI/molecules/SignupInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";

export function SignUpPage({ navigation }) {
  return (
    <View style={AuthStyles.container}>
      <View style={AuthStyles.mainCard}>
        <SignupInputs />
        <PrimaryAuthButton
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
