import { View, Text } from "react-native";
import { stats } from "../../../styles/statsStyle";

export function GeneralStatsCard() {
  const titles = ["Cows", "Milking Cows", "Milk", "Dry Cows"];
  const stat = ["30", "12", "400", "4"];

  return (
    <View style={stats.container}>
      {titles.map((title, index) => {
        return (
          <View style={stats.card}>
            <Text key={index} style={stats.stat}>
              {title}
            </Text>
            <Text style={stats.title}>test</Text>
          </View>
        );
      })}
    </View>
  );
}
