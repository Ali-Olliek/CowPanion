import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const bottomNavBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ACC0B3",
  },
});

export { bottomNavBarStyle };
