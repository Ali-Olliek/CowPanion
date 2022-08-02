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
    width: windowWidth * 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
  inputs: {
    height: 40,
    width: 0.8 * windowWidth,
    borderBottomWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
  nav: {
    flexDirection: "column",
    marginTop: 20,
    width: 0.6 * windowWidth,
    alignItems: "center",
  },
  success: {
    width: 100,
    height: 45,
    textAlign: "center",
    backgroundColor: "#ACC0B3",
    textAlignVertical: "center",
    borderRadius: 8,
  },
  dropDown: {
    width: 0.8 * windowWidth,
    marginHorizontal: 0.1 * windowWidth,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
    borderRadius: 5,
    marginVertical: 15,
  },
  save: {
    width: windowWidth * 0.8,
    height: 40,
    backgroundColor: "#F17754",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cancel: {
    width: windowWidth * 0.8,
    marginLeft: 0.05 * windowWidth,
    marginTop: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  prompt: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#307A55",
  },
  statusBox: {
    marginTop: 5,
    marginBottom: -5,
    width: 0.8 * windowWidth,
  },
  saveText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});

export { AddAnimalStyle };
