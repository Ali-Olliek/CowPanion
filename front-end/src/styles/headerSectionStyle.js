import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const headerSectionStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    position: "absolute",
    top: 0.1 * windowWidth,
    height: 0.4 * windowHeight,
    justifyContent: "flex-start",
    width: windowWidth,
    alignContent: "center",
    padding: 20,
    backgroundColor: "#344E41",
  },
  title: {
    color: "red",
    fontFamily: "PoppinsBold",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 0.05 * windowHeight,
    textAlignVertical: "center",
    backgroundColor: "#D9D9D9",
  },
});

export { headerSectionStyle };
