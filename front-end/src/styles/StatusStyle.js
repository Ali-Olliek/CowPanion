import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    height: windowHeight * 0.5,
    width: windowWidth,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  PR: {
    backgroundColor: "#f08080",
  },
  D: {
    backgroundColor: "#778899",
  },
  H: {
    backgroundColor: "#87cefa",
  },
  Q: {
    backgroundColor: "#708090",
  },
});
export { statusStyles };
