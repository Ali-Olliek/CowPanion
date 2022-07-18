import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.15,
    width: windowWidth,
    backgroundColor: "#344E41",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headertitle: {
    backgroundColor: "#D9D9D9",
    height: 35,
    paddingHorizontal: 30,
    justifyContent: "center",
    borderRadius: 8,
  },
  titles: {
    height: windowHeight * 0.1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    height: "auto",
    width: "auto",
    flexDirection: "row",
  },
  Attributescontainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  attributeBox: {
    width: 0.2 * windowWidth,
    height: 0.1 * windowWidth,
    borderWidth: 2,
    borderColor: "#344E41",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
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
    width: windowWidth,
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
  },
});

export { styles };
