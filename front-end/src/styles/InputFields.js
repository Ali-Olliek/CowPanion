import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const inputFields = StyleSheet.create({
  AuthInput: {
    backgroundColor: "#DAD7CD",
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export { inputFields };
