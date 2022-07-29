import React from "react";
import "./SideBarStyles.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="adminBox">
        <h4>Admin Name</h4>
      </div>
      <div>
        <button className="button">Log out</button>
      </div>
    </div>
  );
}
