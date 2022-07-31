import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createFarmStyle = StyleSheet.create({
  midSec: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputs: {
    height: 40,
    width: 0.9 * windowWidth,
    borderBottomWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
  GO: {
    borderWidth: 1,
    width: 0.2 * windowWidth,
    height: 40,
    position: "absolute",
    right: -0.9 * windowWidth,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#ACC0B3",
  },
  inputsContainer: {
    height: 0.8 * windowHeight,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  placeholder: {
    fontSize: 10,
    borderBottomWidth: 1,
    width: 0.9 * windowWidth,
    height: 40,
    paddingLeft: 10,
  },
  vetList: {
    marginVertical: 5,
    height: 50,
  },
  vet: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
  },
  listContainer: {
    marginVertical: 5,
  },
  active: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    backgroundColor: "red",
  },
  data: {
    height: 0.25 * windowHeight,
    justifyContent: "space-between",
  },
});

export { createFarmStyle };
