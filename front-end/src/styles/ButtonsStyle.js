import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const buttons = StyleSheet.create({
  primary: {
    backgroundColor: "#ACC0B3",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 0.4 * windowWidth,
  },
  secondary: {
    backgroundColor: "white",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 0.4 * windowWidth,
  },
  LoginPrimary: {
    width: 0.8 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  placeholder: {
    color: "#F2F8F4",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export { buttons };
