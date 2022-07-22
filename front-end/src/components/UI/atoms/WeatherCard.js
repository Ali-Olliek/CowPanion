import { View, Text } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";

export function WeatherCard() {
  const weatherData = require("../../../assets/files/weatherJSON.json");
  const weather_url =
    "https://api.openweathermap.org/data/2.5/weather?q=Beirut&units=metric&appid=9f706b68bb6d46c94afc8cb995634417";

  return (
    <View style={headerSectionStyle.cardsContainer}>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>
          {weatherData.main.temp}
        </Text>
        <Text style={headerSectionStyle.weatherUnit}>Celsius</Text>
      </View>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>
          {weatherData.main.humidity}
        </Text>
        <Text style={headerSectionStyle.weatherUnit}>%</Text>
      </View>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>
          {weatherData.wind.speed}
        </Text>
        <Text style={headerSectionStyle.weatherUnit}>Km/Hr</Text>
      </View>
    </View>
  );
}
