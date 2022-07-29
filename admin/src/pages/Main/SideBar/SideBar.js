import React from "react";
import "./SideBarStyles.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div>
        <h4>Admin Name</h4>
      </div>
      <div className="sbSubSec">
        <button className="sbButton">Users</button>
        <button className="sbButton">Farms</button>
      </div>
      <div>
        <button className="button">Log out</button>
      </div>
    </div>
  );
}
