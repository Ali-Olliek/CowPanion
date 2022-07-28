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
    console.log("hello");
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
          if (response.data.code === 200) {
            navigate("/Main");
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
          <h2>Sign In</h2>
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
            <button className="button" onClick={signIn}>
              Sign In
            </button>
          </div>
        </div>
        <div className="detailsSection">
          <h1 className="detailsTitle">Admin Panel</h1>
          <h4 className="details">
            Admins will be able to get general statistics about their userbase,
            as well to graphs visualizing the said userbase along with a map
            showing all registered farms in the country
          </h4>
        </div>
      </div>
    </div>
  );
}
