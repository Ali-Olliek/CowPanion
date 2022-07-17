import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const bottomNavBarStyle = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "space-evenly",
    top: 0.95 * windowHeight, // Check why bottom: 0 not working
    backgroundColor: "#ACC0B3",
    height: 0.05 * windowHeight,
    alignItems: "center",
    zIndex: 1,
  },
});

export { bottomNavBarStyle };
