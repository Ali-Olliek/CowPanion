import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LandingPageStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
});

export { LandingPageStyle };
