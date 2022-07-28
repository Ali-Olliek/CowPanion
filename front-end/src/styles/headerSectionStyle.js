import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const headerSectionStyle = StyleSheet.create({
  container: {
    height: 0.45 * windowHeight,
    justifyContent: "flex-start",
    width: windowWidth,
    alignContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#344E41",
  },
  titlesContainer: {
    marginTop: 30,
    height: 0.1 * windowHeight,
  },

  title: {
    borderRadius: 5,
    color: "#fff",
    fontSize: 20,
  },
  subtitle: {
    color: "#fff",
    fontSize: 30,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.01,
    opacity: 0.5,
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
    color: "#ffff",
    fontSize: 24,
  },
  weatherUnit: {
    fontSize: 12,
    color: "#ffff",
  },
  hr: {
    borderBottomWidth: 1,
    height: 1,
    marginBottom: 5,
  },
});

export { headerSectionStyle };
