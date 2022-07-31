import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const createReminderStyle = StyleSheet.create({
  midSection: {
    alignItems: "center",
    marginVertical: 20,
    height: windowHeight * 0.2,
  },
  inputs: {
    height: 40,
    width: 0.8 * windowWidth,
    borderBottomWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: 40,
  },
  save: {
    width: 80,
    height: 40,
    backgroundColor: "#D46C4E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cancel: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});

export { createReminderStyle };
