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
    width: 0.8 * windowWidth,
    height: 0.05 * windowHeight,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: "#DAD7CD",
    paddingHorizontal: 10,
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

export { createMed };
