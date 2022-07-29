import React from "react";
import "./MidSecStyles.css";
import StatBoxes from "../../../components/molecules/StatBoxes";
import LeafletMap from "../../../components/molecules/LeafletMap";
import UsersList from "../../../components/molecules/UsersList";
export default function MidSec() {
  return (
    <div className="midSec">
      <div className="topSec">
        <StatBoxes />
      </div>
      <div className="botSec">
        <div className="mapBox">
          <LeafletMap />
        </div>
        <div className="utilBox">
          <UsersList />
        </div>
      </div>
    </div>
  );
}
