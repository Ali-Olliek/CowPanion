import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const profilePageStyles = StyleSheet.create({
  main: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    alignItems: "center",
    marginHorizontal: 0.15 * windowWidth,
  },
  logoutText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 64,
  },

  profileCardContainer: {
    width: 0.8 * windowWidth,
    borderWidth: 0.5,
    backgroundColor: "#307A55",
    height: 60,
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 20,
    elevation: 5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 60,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#91BCA0",
    marginRight: 10,
  },
  info: {
    widht: 0.5 * windowWidth,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
  },
  email: {
    color: "#fff",
    fontWeight: "300",
  },
});

export { profilePageStyles };
