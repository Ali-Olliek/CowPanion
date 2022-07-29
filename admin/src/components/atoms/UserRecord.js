import React from "react";
import "../../pages/Main/MidSection/MidSecStyles.css";
export default function UserRecord({ user }) {
  console.log(user);
  return (
    <div
      className={
        user.user_Type == 1
          ? "record admin"
          : user.user_Type == 2
          ? "record farmer"
          : "record vet"
      }
    >
      <h5 className="name">{user.name}</h5>
      <hr />
      <h5 className="email">{user.email}</h5>
      <hr />
      <h5 className="num">
        {user.phone_number ? "+" + user.phone_number : <h6>no number</h6>}
      </h5>
    </div>
  );
}
