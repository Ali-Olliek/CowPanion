import React from "react";
import StatBox from "../atoms/StatBox";
import "../../pages/Main/MidSection/MidSecStyles.css";
export default function StatBoxes() {
  const data = {
    users: 40,
    farms: 30,
    veterinarians: 10,
    animals: 100,
  };
  return (
    <div className="topSec">
      {Object.entries(data).map((reading, index) => {
        return <StatBox key={index} reading={reading} />;
      })}
    </div>
  );
}
