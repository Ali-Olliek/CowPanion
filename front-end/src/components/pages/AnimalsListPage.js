import { View } from "react-native";
import { MainHeaderTitle } from "../UI/atoms";
import { AttributeBoxes } from "../UI/molecules/AttributeBoxes";
import { AnimalRecord } from "../UI/molecules/AnimalRecord";
import { styles } from "../../styles/AnimalsListStyle";
import { BottomNavBarButtons } from "../UI/organisms";

export function AnimalsListPage() {
  return (
    <View>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animals List"} />
      </View>
      <View style={styles.titles}>
        <AttributeBoxes />
      </View>
      <View style={styles.list}>
        <AnimalRecord />
      </View>
      <BottomNavBarButtons />
    </View>
  );
}
