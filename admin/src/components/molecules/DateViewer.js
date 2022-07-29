import React, { useState, useEffect } from "react";

export default function DateViewer() {
  // States and variables
  const [clock, setClock] = useState();
  const [date, setDate] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toLocaleDateString());
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="date">
      <h3>{clock}</h3>
      <h3>{date}</h3>
    </div>
  );
}
