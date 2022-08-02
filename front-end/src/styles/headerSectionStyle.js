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
    height: 0.2 * windowHeight,

    backgroundColor: "#307A55",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  title: {
    borderRadius: 5,
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },
  subtitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: -10,
    width: windowWidth * 0.85,
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.01,
    opacity: 0.7,
  },
  weatherCard: {
    width: windowWidth * 0.25,
    height: 100,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 0.01 * windowWidth,
  },
  weatherReading: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  weatherUnit: {
    fontSize: 16,
    color: "#000",
  },
  weatherCardsContainer: {
    width: windowWidth,
    height: 0.22 * windowHeight,
    paddingHorizontal: 40,
    backgroundColor: "#F17754",
    marginTop: -6.5,
    marginBottom: 30,
  },
});

export { headerSectionStyle };
