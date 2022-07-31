import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddAnimalStyle = StyleSheet.create({
  main: {
    width: windowWidth,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    height: windowHeight,
    width: windowWidth * 0.8,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 50,
  },
  inputs: {
    height: 40,
    width: 0.8 * windowWidth,
    borderBottomWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
  nav: {
    flexDirection: "row",
    marginVertical: 20,
  },
  success: {
    width: 100,
    height: 45,
    textAlign: "center",
    backgroundColor: "#ACC0B3",
    textAlignVertical: "center",
    borderRadius: 8,
    position: "relative",
  },
});

export { AddAnimalStyle };
