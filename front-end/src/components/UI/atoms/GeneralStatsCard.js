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
  const statsUrl = `api/v1/getGeneralStats/?user_id=${id}`;
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
      <>
        <Text style={statsStyle.dash}>DASHBOARD</Text>
        <View style={statsStyle.container}>
          <TouchableHighlight>
            <View style={statsStyle.card}>
              <Text style={statsStyle.stat}>{stats.animal_count}</Text>
              <Text style={statsStyle.title}>Animals</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={statsStyle.card}>
              <Text style={statsStyle.stat}>{milk}</Text>
              <View>
                <Text style={statsStyle.unitMilk}>cm3/day</Text>
                <Text style={statsStyle.titleMilk}>Milk Quantity</Text>
              </View>
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
      </>
    );
  };

  return <View>{stats && page()}</View>;
}
