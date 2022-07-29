import React from "react";
import "../../pages/Main/MidSection/MidSecStyles.css";
export default function StatBox({ reading }) {
  return (
    <div className="statCard">
      <h4 className="title">{reading[0]}</h4>
      <h1 className="value">{reading[1]}</h1>
    </div>
  );
}
