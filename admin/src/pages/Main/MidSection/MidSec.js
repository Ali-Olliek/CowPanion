import React from "react";
import "./MidSecStyles.css";
// Components
import StatBoxes from "../../../components/molecules/StatBoxes";
import LeafletMap from "../../../components/molecules/LeafletMap";
import UsersList from "../../../components/molecules/UsersList";
import BarChart from "../../../components/molecules/BarChart";
import PieChart from "../../../components/molecules/PieChart";

export default function MidSec() {
  return (
    <div className="midSec">
      <div className="topSec">
        <StatBoxes />
        <UsersList />
      </div>
      <div className="botSec">
        <div className="mapContainer">
          <LeafletMap />
        </div>
        <div className="chartsSec">
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}
