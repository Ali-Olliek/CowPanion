import { View, Text, Image } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

// icons
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export function WeatherCard() {
  const weatherData = require("../../../assets/files/weatherJSON.json");
  const weather_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Beirut&units=metric&appid=9f706b68bb6d46c94afc8cb995634417";

  return (
    <>
      <Text style={{ color: "#fff", marginLeft: 5, marginVertical: 8 }}>
        Today's Weather
      </Text>
      <View style={headerSectionStyle.cardsContainer}>
        <View style={headerSectionStyle.weatherCard}>
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.main.temp}
          </Text>
          <Text style={headerSectionStyle.weatherUnit}>°C</Text>
          <FontAwesome name="thermometer-1" size={35} color="#D46C4E" />
        </View>
        <View style={headerSectionStyle.weatherCard}>
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.main.humidity}
          </Text>
          <Text style={headerSectionStyle.weatherUnit}>%</Text>
          <Ionicons name="water-outline" size={35} color="#D46C4E" />
        </View>
        <View style={headerSectionStyle.weatherCard}>
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.wind.speed}
          </Text>
          <Text style={headerSectionStyle.weatherUnit}>Km/Hr</Text>
          <Feather name="wind" size={35} color="#D46C4E" />
        </View>
      </View>
    </>
  );
}
