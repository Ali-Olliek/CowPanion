import React from "react";
import "./SideBarStyles.css";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div>Admin Name</div>
      <div className="sbSubSec">
        <button>Users</button>
        <button>Farms</button>
      </div>
      <div>
        <button>Log out</button>
      </div>
    </div>
  );
}
