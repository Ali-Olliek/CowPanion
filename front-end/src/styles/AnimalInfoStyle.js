import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const infoStyles = StyleSheet.create({
  infoCard: {
    width: 0.9 * windowWidth,
    height: 0.2 * windowHeight,
  },
  attr: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 0.9 * windowWidth,
    margin: 20,
    padding: 20,
    backgroundColor: "#DAD7CD",
    borderRadius: 8,
    borderColor: "#2A432A",
    borderWidth: 1,
  },
  list: {
    flex: 1,
    flexDirection: "column",
  },
  picture: {
    justifyContent: "center",
    width: 75,
    height: 75,
    alignItems: "center",
    backgroundColor: "#D46C4E",
    borderRadius: 8,
  },
  actionCard: {
    width: 100,
    height: 100,
    backgroundColor: "#DAD7CD",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2A432A",
    borderWidth: 1,
  },
  actionsContainer: {
    flex: 1,
    height: windowHeight * 0.6,
    width: windowWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export { infoStyles };
