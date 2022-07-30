import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStyles.css";
import axios from "axios";

export default function LoginPage() {
  //
  // States and Variables
  let navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");

  //
  // Create Request

  const signInUrl = "http://127.0.0.1:8000/api/v1/signIn/";
  const data = {
    email: adminEmail,
    password: adminPassword,
  };
  const signIn = async (e) => {
    e.preventDefault();
    if (adminSecret !== "18795") {
      return;
    } else {
      axios({
        method: "POST",
        url: signInUrl,
        data: data,
        headers: { "content-type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === 200 && response.data.user_type === 1) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.user_name);
            navigate("/Main");
          } else {
            navigate("/404");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // Main
  return (
    <div className="pageContainer">
      <div className="mainCard">
        <div className="inputsSection">
          <h1>Sign In</h1>
          <div className="inputs">
            <input
              onChange={(e) => setAdminEmail(e.target.value)}
              className="input"
              placeholder="email"
            ></input>
            <input
              onChange={(e) => setAdminPassword(e.target.value)}
              className="input"
              placeholder="password"
              type={"password"}
            ></input>
            <input
              onChange={(e) => setAdminSecret(e.target.value)}
              className="input"
              placeholder="Admin Secret"
              type={"password"}
            ></input>
            <button className="buttonAuth" onClick={signIn}>
              Sign In
            </button>
          </div>
        </div>
        <div className="detailsSection">
          <h1 className="detailsTitle">Admin's Panel</h1>
          <h4 className="details">
            Admins will be able to monitor their userbase, and get visual
            representation of the age groups of said userbase. Admins will see a
            map with markers showing the location of registered farms.
          </h4>
        </div>
      </div>
    </div>
  );
}
