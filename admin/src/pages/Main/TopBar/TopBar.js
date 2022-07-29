import React from "react";
import "./TopBarStyles.css";
import WeatherCards from "../../../components/molecules/WeatherCards";
import DateViewer from "../../../components/molecules/DateViewer";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="weatherCards">
        <WeatherCards />
      </div>
      <div>
        <DateViewer />
      </div>
    </div>
  );
}
