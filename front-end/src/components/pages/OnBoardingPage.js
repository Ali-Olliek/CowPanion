import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import { onBoardingStyle } from "../../styles/onBoardingStyle";
export function OnBoardingPage({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate("SignIn")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onBoardingStyle.image}
              source={require("../../assets/images/Logo.png")}
            />
          ),
          title: "CowPanion",
          subtitle: "Manage your farm with ease",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onBoardingStyle.image}
              source={require("../../assets/images/chores.png")}
            />
          ),
          title: "Tasks Management",
          subtitle: "Create and manage your farm related tasks",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onBoardingStyle.image}
              source={require("../../assets/images/analysis.png")}
            />
          ),
          title: "Analyze",
          subtitle: "Visualize your farm's performance",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onBoardingStyle.image}
              source={require("../../assets/images/Link.png")}
            />
          ),
          title: "Link with your Veterinarian",
          subtitle: "Veterinarians can check up on your animal's status",
        },
      ]}
    />
  );
}
