import React from "react";
import "../../pages/Main/TopBar/TopBarStyles.css";
export default function WeatherCard({ reading }) {
  return (
    <div className="weatherCard">
      <h1 className="weatherValue">{reading[1].value}</h1>
      <h6 className="unit">{reading[1].unit}</h6>
    </div>
  );
}
