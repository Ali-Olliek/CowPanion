import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    width: windowWidth,
  },
  originalStatus: {
    backgroundColor: "#B7B7B7",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Calf: {
    backgroundColor: "#ffcccb",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Heifer: {
    backgroundColor: "#778899",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Dry: {
    backgroundColor: "#87cefa",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Lactating: {
    backgroundColor: "#f08080",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  prompt: {
    marginHorizontal: 20,
  },
  LactatingSm: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#F08080",
    width: 65,
    height: 25,
    borderRadius: 5,
    marginRight: -20,
  },
  DrySm: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#87cefa",
    width: 65,
    height: 25,
    borderRadius: 5,
    marginRight: -20,
  },
  HeiferSm: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#778899",
    width: 65,
    height: 25,
    borderRadius: 5,
    marginRight: -20,
  },
  CalfSm: {
    textAlign: "center",
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#F4C39F",
    width: 65,
    height: 25,
    borderRadius: 5,

    marginRight: -20,
  },
});
export { statusStyles };
