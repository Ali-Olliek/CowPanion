import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const infoStyles = StyleSheet.create({
  infoCard: {
    width: 0.9 * windowWidth,
    height: 0.2 * windowHeight,
  },
  attr: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 0.9 * windowWidth,
    margin: 20,
    padding: 20,
    backgroundColor: "#DAD7CD",
    borderRadius: 8,
    borderColor: "#2A432A",
    borderWidth: 1,
  },
  list: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  picture: {
    justifyContent: "center",
    width: 75,
    height: 75,
    alignItems: "center",
    backgroundColor: "#D46C4E",
    borderRadius: 8,
  },
  actionCard: {
    width: 100,
    height: 100,
    backgroundColor: "#DAD7CD",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2A432A",
    borderWidth: 1,
  },
  actionsContainer: {
    height: windowHeight * 0.6,
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 40,
  },
  medicalCard: {
    color: "black",
    height: 0.3 * windowHeight,
    position: "relative",
    top: -0.35 * windowHeight,
    justifyContent: "center",
    flexDirection: "column",
    marginHorizontal: 0.1 * windowWidth,
  },
  card: {
    backgroundColor: "#DAD7CD",
    borderColor: "#2A432A",
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    width: 0.8 * windowWidth,
    alignItems: "center",
    marginVertical: 5,
    height: 50,
    borderRadius: 8,
  },
  createMedicalRecordButtonContainer: {
    width: windowWidth * 0.8,
    top: -0.4 * windowHeight,
    right: -0.1 * windowWidth,
    height: 25,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  button: {
    width: 100,
    height: 60,
    backgroundColor: "#D46C4E",
    borderColor: "#2A432A",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  password: {
    borderBottomWidth: 1,
    width: 115,
  },
});

export { infoStyles };
