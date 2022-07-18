import { View, Text } from "react-native";
import { stats } from "../../../styles/statsStyle";

export function GeneralStatsCard() {
  const statistics = {
    cows: 30,
    "Milking Cows": 12,
    "Milk Production": 500,
    "Dry Cows": 4,
  };

  const displayStatistics = Object.entries(statistics).map(([title, value]) => {
    return (
      <View style={stats.card}>
        <Text style={stats.stat}>{title}</Text>
        <Text style={stats.stat}>{value}</Text>
      </View>
    );
  });
  return <View style={stats.container}>{displayStatistics}</View>;
}
