import React from "react";
import "./SideBarStyles.css";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("name");
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="sideBar">
      <div className="adminBox">
        <h4>{adminName}</h4>
      </div>
      <div>
        <button onClick={handleLogOut} className="button">
          Log out
        </button>
      </div>
    </div>
  );
}
