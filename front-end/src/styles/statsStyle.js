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
    paddingVertical: 25,
    height: 100,
  },
  card: {
    width: 0.35 * windowWidth,
    marginVertical: 0.02 * windowHeight,
    marginHorizontal: 0.02 * windowHeight,
    elevation: 4,
    height: 0.15 * windowHeight,
    borderRadius: 8,
    backgroundColor: "#ffff",
    borderWidth: 0.5,
    borderColor: "#307A55",
    justifyContent: "space-around",
  },
  stat: {
    textAlign: "center",
    color: "#2E302F",
    fontSize: 35,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    color: "#91BCA0",
    fontSize: 14,
    fontWeight: "bold",
  },
  unit: {
    textAlign: "center",
    fontSize: 12,
  },
  dash: {
    position: "absolute",
    top: 5,
    left: 42,
    fontWeight: "900",
    color: "#307A55",
  },
  unitMilk: {
    textAlign: "center",
    fontSize: 12,
    color: "#2E302F",
    fontWeight: "800",
  },
  titleMilk: {
    textAlign: "center",
    color: "#91BCA0",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export { statsStyle };
