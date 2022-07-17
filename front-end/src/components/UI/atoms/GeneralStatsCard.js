import { View, Text } from "react-native";
import { stats } from "../../../styles/stats";

export function GeneralStatsCard() {
  return (
    <View style={stats.container}>
      <View style={stats.card}>
        <Text style={stats.stat}>30</Text>
        <Text style={stats.title}>Cows</Text>
      </View>
      <View style={stats.card}>
        <Text style={stats.stat}>40</Text>
        <Text style={stats.title}>Milking Cows</Text>
      </View>
      <View style={stats.card}>
        <Text style={stats.stat}> 400L/Day</Text>
        <Text style={stats.title}>Milk</Text>
      </View>
      <View style={stats.card}>
        <Text style={stats.stat}>8</Text>
        <Text style={stats.title}>Dry Cows</Text>
      </View>
    </View>
  );
}
