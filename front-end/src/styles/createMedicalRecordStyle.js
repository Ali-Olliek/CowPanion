import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createMed = StyleSheet.create({
  midSection: {
    alignItems: "center",
    marginVertical: 20,
    height: windowHeight * 0.2,
  },
  inputs: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: "#F2F8F4",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#91BCA0",
  },
  dueDate: {
    width: 100,
    height: 50,
    backgroundColor: "#ACC0B3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  actions: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: 40,
  },
  save: {
    width: windowWidth * 0.8,
    marginLeft: 0.1 * windowWidth,
    height: 40,
    backgroundColor: "#F17754",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cancel: {
    width: windowWidth * 0.8,
    marginLeft: 0.1 * windowWidth,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    height: 10,
  },
  text: {
    fontSize: 14,
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    height: 40,
  },
  Auth: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  messsageSecondary: {
    fontSize: 12,
    marginVertical: 20,
  },
  saveText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
  },
});

export { createMed };
