// React
import { View } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { AnimalRecord, AttributeBoxes } from "../UI/molecules";

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
    </View>
  );
}
