import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const inputFields = StyleSheet.create({
  AuthInput: {
    height: 40,
    width: 0.8 * windowWidth,
    borderBottomWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
});

export { inputFields };
