import React, { useState, useEffect } from "react";
import StatBox from "../atoms/StatBox";
import "../../pages/Main/MidSection/MidSecStyles.css";
import axios from "axios";
export default function StatBoxes() {
  // States and variables
  const [stats, setStats] = useState([]);
  const token = localStorage.getItem("token");

  // Create Request
  const getStatsUrl = "http://127.0.0.1:8000/api/v1/adminStats/";
  const getStats = () => {
    axios({
      url: getStatsUrl,
      method: "GET",
      headers: { Authorization: token },
    })
      .then((response) => {
        setStats(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="statsContainer">
      {Object.entries(stats).map((reading, index) => {
        return <StatBox key={index} reading={reading} />;
      })}
    </div>
  );
}
