import React from "react";
import "./SideBarStyles.css";

export default function SideBar() {
  const adminName = localStorage.getItem("name");
  return (
    <div className="sideBar">
      <div className="adminBox">
        <h4>{adminName}</h4>
      </div>
      <div>
        <button className="button">Log out</button>
      </div>
    </div>
  );
}
