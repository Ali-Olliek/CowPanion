import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InputStyles = StyleSheet.create({
  LoginInput: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: "#F2F8F4",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
  },
  prompt: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#307A55",
  },
  inputBox: {
    marginVertical: 5,
  },
});

export { InputStyles };
