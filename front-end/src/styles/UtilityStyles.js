import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UtilityStyles = StyleSheet.create({
  Error: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight * 0.5,
  },
});
export { UtilityStyles };
