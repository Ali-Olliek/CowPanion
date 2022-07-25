import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    width: windowWidth,
  },
  circle: {
    height: 60,
    width: 80,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Calf: {
    backgroundColor: "#ffcccb",
  },
  Heifer: {
    backgroundColor: "#778899",
  },
  Dry: {
    backgroundColor: "#87cefa",
  },
  Lactating: {
    backgroundColor: "#f08080",
  },
  main: {
    height: windowHeight * 0.3,
    justifyContent: "center",
  },
  prompt: {
    marginHorizontal: 20,
  },
});
export { statusStyles };
