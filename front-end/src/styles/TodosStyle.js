import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Todos = StyleSheet.create({
  TodoContainer: {
    width: 0.9 * windowWidth,
    height: 60,
    borderWidth: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderColor: "#91BCA0",
    elevation: 5,
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
    width: 50,
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
    backgroundColor: "#fff",
    borderColor: "#91BCA0",
    borderWidth: 3,
  },
  midSec: {
    justifyContent: "space-between",
    width: windowWidth,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 5,
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
  empty: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0.24 * windowHeight,
  },
  addReminder: {
    width: 42,
    height: 42,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 10,
    borderRadius: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#D46C4E",
    elevation: 5,
  },
  checked: {
    width: 30,
    height: 30,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#307A55",
    borderColor: "#91BCA0",
    borderWidth: 3,
  },
  messagePrimary: {
    color: "#2E302F",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  messageSecondary: {
    width: 250,
    fontWeight: "300",
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});

export { Todos };
