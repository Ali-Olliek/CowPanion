import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignUpPageStyle = StyleSheet.create({
  mainContainer: {
    width: 0.8 * windowWidth,
    height: 0.8 * windowHeight,
    justifyContent: "center",
    paddingHorizontal: 0.1 * windowWidth,
  },
  BG: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    height: 0.68 * windowHeight,
    justifyContent: "flex-start",
  },
  dropDown: {
    width: 0.8 * windowWidth,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
    borderRadius: 5,
    marginVertical: 15,
  },
  label: {
    color: "grey",
  },
  DOB: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: "#F2F8F4",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
    justifyContent: "center",
    color: "grey",
  },
  signUpButton: {
    marginTop: -40,
  },
  secondary: {
    marginTop: 20,
  },
  secondaryText: {
    color: "#91BCA0",
  },
  link: {
    color: "#F17754",
  },
  active: {
    width: 0.8 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  inactive: {
    width: 0.8 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    opacity: 0.5,
  },
});

export { SignUpPageStyle };
