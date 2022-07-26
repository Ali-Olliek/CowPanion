// Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
// Styles
import { statsStyle } from "../../../styles/statsStyle";

export function GeneralStatsCard() {
  //
  // States and Variables
  const [stats, setStats] = useState({});
  const { token, id } = useSelector((state) => state.user.user);
  const [milk, setMilk] = useState("");
  //
  // Create Requestt
  const statsUrl = `http://10.0.2.2:8000/api/v1/getGeneralStats/?user_id=${id}`;
  const getGeneralStats = () => {
    axios({
      url: statsUrl,
      method: "GET",
      headers: { Authorization: token },
    }).then((response) => {
      setMilk(response.data.milk_quantity.quantity);
      setTimeout(() => {
        setStats(response.data);
      }, 100);
    });
  };

  useEffect(() => {
    getGeneralStats();
  }, []);

  const page = () => {
    return (
      <View style={statsStyle.container}>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.title}>Animals</Text>
            <Text style={statsStyle.stat}>{stats.animal_count}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.title}>Lactating Cows</Text>
            <Text style={statsStyle.stat}>{stats.lactating_cows}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.title}>Dry Cows</Text>
            <Text style={statsStyle.stat}>{stats.dry_cows}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.title}>Milk Quantity</Text>
            <Text style={statsStyle.stat}>{milk}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return <View>{stats && page()}</View>;
}
