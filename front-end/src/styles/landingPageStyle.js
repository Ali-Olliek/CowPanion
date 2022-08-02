import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LandingPageStyle = StyleSheet.create({
  container: {
    width: 1 * windowWidth,
    height: 1 * windowHeight,
  },
});

export { LandingPageStyle };
