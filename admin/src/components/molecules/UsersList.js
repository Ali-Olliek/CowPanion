import axios from "axios";
import React, { useState, useEffect } from "react";
import UserRecord from "../atoms/UserRecord";
import "../../pages/Main/MidSection/MidSecStyles.css";
export default function UsersList({ users, setUsers }) {
  // States and Variables

  const token = localStorage.getItem("token");

  // Create Request

  const getUsersUrl = "http://127.0.0.1:8000/api/v1/adminGetUsers/";
  const getUsers = () => {
    axios({
      url: getUsersUrl,
      method: "GET",
      headers: { Authorization: token },
    })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="usersContainer">
      {users.map((user) => {
        return <UserRecord user={user} />;
      })}
    </div>
  );
}
