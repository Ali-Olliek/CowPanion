import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginPageStyle = StyleSheet.create({
  BG: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
    backgroundColor: "#307A55",
  },
  mainContainer: {
    justifyContent: "space-between",
    height: 0.8 * windowHeight,
    alignItems: "center",
  },
  logoTitle: {
    fontSize: 28,
    color: "#F2F8F4",
    elevation: 5,
  },
  prompt: {
    fontSize: 12,
    color: "#91BCA0",
    fontWeight: "bold",
  },

  link: {
    color: "#F17754",
  },
  secondaryText: {
    color: "#F2F8F4",
  },
});

export { LoginPageStyle };
