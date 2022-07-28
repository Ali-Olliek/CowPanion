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
});

export { buttons };
