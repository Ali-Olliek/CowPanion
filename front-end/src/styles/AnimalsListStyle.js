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
    backgroundColor: "#307A55",
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
    width: windowWidth,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
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
    height: 30,
    alignItems: "center",
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
    width: 0.9 * windowWidth,
    marginLeft: 0.05 * windowWidth,
    borderBottomWidth: 1,
    borderColor: "#91BCA0",
  },
  container: {
    marginTop: -70,
    justifyContent: "center",
    alignItems: "flex-start",
    height: windowHeight,
  },
  AddAnimalButton: {
    fontSize: 64,
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
    fontWeight: "200",
    color: "#fff",
  },
  plus: {
    fontSize: 64,
    color: "#fff",
  },
  animalName: {
    width: 120,
  },
  animalID: {
    width: 20,
  },
  animalDOB: {
    width: 40,
  },
  attrId: {
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#307A55",
  },
  attrAge: {
    width: 65,
    textAlign: "center",
    alignItems: "center",
    marginLeft: -40,
    paddingLeft: 10,
    borderColor: "#307A55",
  },
  attrName: {
    width: 130,
    alignItems: "flex-start",
    marginLeft: -30,
    borderColor: "#307A55",
  },
  attrStatus: {
    width: 70,
    alignItems: "center",
    marginLeft: -30,
    borderColor: "#307A55",
  },
  attrText: {
    fontWeight: "bold",
    color: "#307A55",
  },
  bottomTitle: {
    width: windowWidth * 0.9,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { styles };
