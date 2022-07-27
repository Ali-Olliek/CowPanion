import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AuthStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
  mainCard: {
    width: 0.8 * windowWidth,
    height: 0.7 * windowHeight,
    justifyContent: "space-around",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  image: {
    borderColor: "#D46C4E",
    borderWidth: 2,
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  ErrorBox: {
    height: 20,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { AuthStyles };
