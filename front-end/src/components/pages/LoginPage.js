//React
import { View, Image } from "react-native";

//Styles
import { AuthStyles } from "../../styles/AuthPagesStyle";

// Components
import { LoginInputs } from "../UI/molecules/LoginInputs";
import { PrimaryAuthButton, SecondaryAuthButton } from "../UI/atoms/Auth";

export function LoginPage({ navigation }) {
  return (
    <View style={AuthStyles.container}>
      <View>
        <Image></Image>
      </View>
      <View style={AuthStyles.mainCard}>
        <LoginInputs />
        <PrimaryAuthButton
          navigation={navigation}
          nav={"LandingPage"}
          placeholder={"Sign In"}
        />
        <SecondaryAuthButton
          navigation={navigation}
          nav={"SignUp"}
          placeholder={"Sign Up"}
        />
      </View>
    </View>
  );
}
