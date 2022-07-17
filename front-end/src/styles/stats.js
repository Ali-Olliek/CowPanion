import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const stats = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
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
  },
  title: {
    textAlign: "center",
    color: "#D46C4E",
  },
});

export { stats };
