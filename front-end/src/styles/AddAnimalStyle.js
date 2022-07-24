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
    width: 0.8 * windowWidth,
    height: 0.05 * windowHeight,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: "#DAD7CD",
    paddingHorizontal: 10,
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
