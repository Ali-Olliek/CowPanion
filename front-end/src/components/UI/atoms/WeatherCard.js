import { View, Text, Image } from "react-native";
import { headerSectionStyle } from "../../../styles/headerSectionStyle";
import { HumiditySensor, Thermostat, WindSock } from "../../../assets/svgs";

export function WeatherCard() {
  return (
    <View style={headerSectionStyle.cardsContainer}>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>30</Text>
        <Text style={headerSectionStyle.weatherUnit}>Celsius</Text>
      </View>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>70</Text>
        <Text style={headerSectionStyle.weatherUnit}>%</Text>
      </View>
      <View style={headerSectionStyle.weatherCard}>
        <Text style={headerSectionStyle.weatherReading}>25</Text>
        <Text style={headerSectionStyle.weatherUnit}>Km/Hr</Text>
      </View>
    </View>
  );
}
