import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const headerSectionStyle = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: "PoppinsNormal",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 0.05 * windowHeight,
    textAlignVertical: "center",
    backgroundColor: "#D9D9D9",
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.01,
    opacity: 0.5,
    marginTop: windowHeight * 0.04,
  },
  weatherCard: {
    width: windowWidth * 0.25,
    borderRadius: 5,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 0.01 * windowWidth,
  },
  weatherReading: {
    fontFamily: "PoppinsBold",
    color: "#ffff",
    fontSize: 24,
  },
  weatherUnit: {
    fontSize: 12,
    color: "#ffff",
  },
});

export { headerSectionStyle };
