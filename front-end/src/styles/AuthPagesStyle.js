import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AuthStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
  mainCard: {
    width: 0.8 * windowWidth,
    height: 0.5 * windowHeight,
    justifyContent: "space-around",
  },
});

export { AuthStyles };
