import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createFarmStyle = StyleSheet.create({
  midSec: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 0.8 * windowHeight,
  },
  inputs: {
    backgroundColor: "#DAD7CD",
    height: 60,
    width: 0.6 * windowWidth,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 8,
  },
  GO: {
    borderWidth: 1,
    width: 0.5 * windowWidth,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 100,
    backgroundColor: "#ACC0B3",
  },
  inputsContainer: {
    height: 0.2 * windowHeight,
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export { createFarmStyle };
