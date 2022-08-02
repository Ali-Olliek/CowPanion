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
    <View style={headerSectionStyle.weatherCardsContainer}>
      <Text
        style={{
          color: "#fff",
          marginLeft: 5,
          marginVertical: 8,
          fontWeight: "bold",
        }}
      >
        Today's Weather
      </Text>
      <View style={headerSectionStyle.cardsContainer}>
        <View style={headerSectionStyle.weatherCard}>
          <FontAwesome name="thermometer-1" size={35} color="#D46C4E" />
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.main.temp} °C
          </Text>
        </View>
        <View style={headerSectionStyle.weatherCard}>
          <Ionicons name="water-outline" size={35} color="#D46C4E" />
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.main.humidity} %
          </Text>
        </View>
        <View style={headerSectionStyle.weatherCard}>
          <Feather name="wind" size={35} color="#D46C4E" />
          <Text style={headerSectionStyle.weatherReading}>
            {weatherData.wind.speed} <Text style={{ fontSize: 12 }}>Km/Hr</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
