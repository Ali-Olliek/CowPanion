import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createReminderStyle = StyleSheet.create({
  midSection: {
    alignItems: "center",
    marginVertical: 20,
    height: windowHeight * 0.3,
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
  prompt: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#307A55",
  },
  inputsBox: {
    marginVertical: 5,
  },
  categories: {
    flexDirection: "row",
    width: windowWidth * 0.8,
    height: 40,
    justifyContent: "space-evenly",
    marginVertical: 30,
  },
  categoryBox: {
    width: 80,
    height: 40,
    backgroundColor: "#DAD7CD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  save: {
    width: 0.8 * windowWidth,
    height: 50,
    backgroundColor: "#F17754",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cancel: {
    width: 0.8 * windowWidth,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  saveText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
  },
});

export { createReminderStyle };
