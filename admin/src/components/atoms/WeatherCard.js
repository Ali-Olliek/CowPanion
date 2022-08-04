import React from "react";
import "../../pages/Main/TopBar/TopBarStyles.css";
export default function WeatherCard({ reading }) {
  return (
    <>
      <div className="weatherCard">
        <h1 className="weatherValue">{Math.round(reading.temp)}</h1>
        <h6 className="unit">°C</h6>
      </div>
      <div className="weatherCard">
        <h1 className="weatherValue">{Math.round(reading.humidity)}</h1>
        <h6 className="unit">%</h6>
      </div>
      <div className="weatherCard">
        <h1 className="weatherValue">{Math.round(reading.wind)}</h1>
        <h6 className="unit">Km/hr</h6>
      </div>
    </>
  );
}
