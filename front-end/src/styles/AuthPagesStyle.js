import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AuthStyles = StyleSheet.create({
  mainCard: {
    width: 0.8 * windowWidth,
    height: 0.8 * windowHeight,
    justifyContent: "space-around",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  image: {
    borderWidth: 2,
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  ErrorBox: {
    height: 30,
    width: 200,
    borderRadius: 10,
    margin: 0,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    height: 0.12 * windowHeight,
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    height: 0.5 * windowHeight,
    justifyContent: "space-evenly",
    marginBottom: 0.3 * windowHeight,
  },
  imageActive: {
    borderColor: "#D46C4E",
    borderWidth: 2,
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  BG: {
    justifyContent: "center",
    alignItems: "center",
    height: 1 * windowHeight,
    backgroundColor: "#307A55",
  },
  mainContainer: {
    justifyContent: "space-between",
    height: 0.8 * windowHeight,
    alignItems: "center",
    borderWidth: 1,
  },
});

export { AuthStyles };
