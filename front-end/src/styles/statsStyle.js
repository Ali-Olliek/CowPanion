import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statsStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: 0.45 * windowHeight,
    flexWrap: "wrap",
    paddingHorizontal: 20,
    height: 100,
  },
  card: {
    width: 0.35 * windowWidth,
    marginVertical: 0.05 * windowHeight,
    marginHorizontal: 0.02 * windowHeight,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 0.15 * windowHeight,
    borderRadius: 8,
    borderColor: "#2A432A",
    backgroundColor: "#DAD7CD",
    justifyContent: "space-around",
  },
  stat: {
    textAlign: "center",
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    color: "#D46C4E",
    fontSize: 12,
  },
});

export { statsStyle };
