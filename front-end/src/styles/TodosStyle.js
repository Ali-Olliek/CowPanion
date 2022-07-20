import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Todos = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  TodoContainer: {
    width: 0.9 * windowWidth,
    height: 0.1 * windowHeight,
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#DAD7CD",
  },
  TodoInfo: {
    justifyContent: "space-evenly",
  },
  TodoDesc: {
    justifyContent: "space-evenly",
  },
  TodoDue: {
    fontSize: 12,
  },
  TodoAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  createTodoButton: {
    width: 100,
    height: 50,
    backgroundColor: "#ACC0B3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#D46C4E",
  },
  Check: {
    width: 30,
    height: 30,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#D46C4E",
    borderWidth: 1,
  },
  midSec: {
    justifyContent: "space-between",
    width: windowWidth,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: "#ACC0B3",
    width: 80,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Todos };
