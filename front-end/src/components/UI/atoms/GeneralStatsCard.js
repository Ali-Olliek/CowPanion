// Modules
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

// Styles
import { statsStyle } from "../../../styles/statsStyle";

export function GeneralStatsCard() {
  //
  // States and Variables
  const [milk, setMilk] = useState("");
  const [stats, setStats] = useState({});
  const { token, id, userType } = useSelector((state) => state.user.user);

  useEffect(() => {
    getGeneralStats();
  }, [token]);

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

  const page = () => {
    return (
      <View style={statsStyle.container}>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.stat}>{stats.animal_count}</Text>
            <Text style={statsStyle.title}>Animals</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <View>
              <Text style={statsStyle.stat}>{milk}</Text>
              <Text style={statsStyle.unit}>cm3/day</Text>
            </View>
            <Text style={statsStyle.title}>Milk Quantity</Text>
            <Text style={statsStyle.source}>Source of data: Arduino</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.stat}>{stats.lactating_cows}</Text>
            <Text style={statsStyle.title}>Lactating Cows</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={statsStyle.card}>
            <Text style={statsStyle.stat}>{stats.dry_cows}</Text>
            <Text style={statsStyle.title}>Dry Cows</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return <View>{stats && page()}</View>;
}
