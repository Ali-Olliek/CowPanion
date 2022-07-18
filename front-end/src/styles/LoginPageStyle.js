import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginPageStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
  mainCard: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    backgroundColor: "#273724",
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: "#DAD7CD",
  },
  primaryButton: {
    width: "auto",
    height: 0.04 * windowHeight,
    borderWidth: 1,
    paddingHorizontal: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },
  secondaryButton: {
    width: "auto",
    height: 0.04 * windowHeight,
    borderWidth: 1,
    paddingHorizontal: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export { LoginPageStyle };
