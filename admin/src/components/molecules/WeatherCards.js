import React, { useState, useEffect } from "react";
import WeatherCard from "../atoms/WeatherCard";
import "../../pages/Main/TopBar/TopBarStyles.css";
import axios from "axios";
export default function WeatherCards() {
  const [weatherData, setWeatherData] = useState({
    temp: "",
    humidity: "",
    wind: "",
  });

  const getWeather = () => {
    axios({
      url: "https://api.openweathermap.org/data/2.5/weather?q=Beirut&units=metric&appid=9f706b68bb6d46c94afc8cb995634417",
      method: "GET",
    })
      .then((response) => {
        setWeatherData({
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="weatherCards">
      <WeatherCard reading={weatherData} />
    </div>
  );
}
