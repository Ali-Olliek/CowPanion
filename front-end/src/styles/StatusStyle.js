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
  originalStatus: {
    backgroundColor: "#B7B7B7",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Calf: {
    backgroundColor: "#ffcccb",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Heifer: {
    backgroundColor: "#778899",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Dry: {
    backgroundColor: "#87cefa",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Lactating: {
    backgroundColor: "#f08080",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
