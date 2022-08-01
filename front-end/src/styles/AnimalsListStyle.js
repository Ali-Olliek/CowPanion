import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.2,
    width: windowWidth,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#307A55",
  },
  createFarmHeader: {
    height: windowHeight * 0.15,
    width: windowWidth,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#344E41",
  },
  headertitle: {
    height: 35,
    paddingHorizontal: 30,
    justifyContent: "center",
    borderRadius: 8,
  },
  titles: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  list: {
    height: "auto",
    width: "auto",
  },
  Attributescontainer: {
    flexDirection: "row",
  },
  attributeBox: {
    width: 0.2 * windowWidth,
    height: 0.1 * windowWidth,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: "#D46C4E",
  },
  attribute: {
    color: "black",
    fontWeight: "600",
  },
  animalAttr: {
    width: 40,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },

  recordContainer: {
    width: windowWidth * 0.99,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginVertical: 5,
  },
  status: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#ACC0B3",
    textAlign: "center",
    textAlignVertical: "center",
  },
  hr: {
    width: windowWidth,
    borderBottomWidth: 1,
    opacity: 0.2,
  },
  container: {
    marginTop: -70,
    justifyContent: "center",
    alignItems: "flex-start",
    height: windowHeight,
  },
  AddAnimal: {
    width: 42,
    height: 42,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 10,
    borderRadius: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#D46C4E",
    elevation: 5,
  },
  messagePrimary: { fontSize: 20 },
  messageSecondary: { fontSize: 10, color: "grey" },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight * 0.5,
  },
  subTitle: {
    fontSize: 20,
    color: "#fff",
  },
});

export { styles };
