// React
import { View } from "react-native";

// Styles
import { styles } from "../../styles/AnimalsListStyle";

// Components
import { MainHeaderTitle } from "../UI/atoms";
import { AnimalRecord, AttributeBoxes } from "../UI/molecules";

export function AnimalsListPage() {
  const animals = [
    {
      Status: "PR",
      ID: "6",
      Name: "Betsy",
      Age: "4",
    },
    {
      Status: "D",
      ID: "2",
      Name: "Kiky",
      Age: "2",
    },
  ];

  return (
    <View>
      <View style={styles.header}>
        <MainHeaderTitle title={"Animals List"} />
      </View>
      <View style={styles.titles}>
        <AttributeBoxes />
      </View>
      <View style={styles.list}>
        <AnimalRecord animals={animals} />
      </View>
    </View>
  );
}
