import React from "react";
import fourOfour from "../assets/images/401.png";
export default function UnAuth() {
  return (
    <>
      <img src={fourOfour} alt="404" />
      <h4>Only admins are allowed here</h4>
    </>
  );
}
