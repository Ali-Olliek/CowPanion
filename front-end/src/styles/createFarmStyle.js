import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createFarmStyle = StyleSheet.create({
  midSec: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputs: {
    width: windowWidth * 0.9,
    height: 50,
    backgroundColor: "#F2F8F4",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
  },
  inputsContainer: {
    height: 0.85 * windowHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 5,
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
  dropDown: {
    width: 0.9 * windowWidth,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
    borderRadius: 5,
    marginVertical: 5,
  },
  continue: {
    width: 0.9 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveContinue: {
    width: 0.9 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    opacity: 0.5,
  },
});

export { createFarmStyle };
