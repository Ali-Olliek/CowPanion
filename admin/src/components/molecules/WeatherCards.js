import React from "react";
import WeatherCard from "../atoms/WeatherCard";
import "../../pages/Main/TopBar/TopBarStyles.css";

export default function WeatherCards() {
  const weatherData = {
    Temperature: { value: 30, unit: "Celsius" },
    humidity: { value: 60, unit: "%" },
    windSpeed: {
      value: 40,
      unit: "Km/Hr",
    },
  };
  return (
    <div className="weatherCards">
      {Object.entries(weatherData).map((reading, index) => {
        return <WeatherCard reading={reading} />;
      })}
    </div>
  );
}
