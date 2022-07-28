import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statsStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 45,
    height: 100,
  },
  card: {
    width: 0.35 * windowWidth,
    marginVertical: 0.02 * windowHeight,
    marginHorizontal: 0.02 * windowHeight,
    paddingHorizontal: 10,
    elevation: 4,
    height: 0.15 * windowHeight,
    borderRadius: 8,
    backgroundColor: "#DAD7CD",
    justifyContent: "space-around",
  },
  stat: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    color: "#D46C4E",
    fontSize: 14,
    fontWeight: "600",
  },
  unit: {
    textAlign: "center",
    fontSize: 12,
  },
  source: {
    fontSize: 8,
  },
});

export { statsStyle };
