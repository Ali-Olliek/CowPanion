import React from "react";
import "../../pages/Main/MidSection/MidSecStyles.css";
export default function StatBox({ reading }) {
  return (
    <div className="statCard">
      <h2>{reading[0]}</h2>
      <h2>{reading[1]}</h2>
    </div>
  );
}
