import React, { useState } from "react";
import "./MidSecStyles.css";
// Components
import StatBoxes from "../../../components/molecules/StatBoxes";
import LeafletMap from "../../../components/molecules/LeafletMap";
import UsersList from "../../../components/molecules/UsersList";
import BarChart from "../../../components/molecules/BarChart";
import PieChart from "../../../components/molecules/PieChart";

export default function MidSec() {
  const [users, setUsers] = useState([]);
  return (
    <div className="midSec">
      <div className="topSec">
        <StatBoxes />
        <UsersList users={users} setUsers={setUsers} />
      </div>
      <div className="botSec">
        <div className="mapContainer">
          <LeafletMap />
        </div>
        <div className="chartsSec">
          <h4 className="chartTitle">
            Users Age Groups<h6 className="chartTitle"> Using D3.JS</h6>
          </h4>

          <PieChart users={users} />
        </div>
      </div>
    </div>
  );
}
