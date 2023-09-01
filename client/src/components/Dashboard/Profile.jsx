import React, { useContext } from "react";
import "../styling/dashboard.css";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import { LoginContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { account, setAccount } = useContext(LoginContext);

  const reDirect = useNavigate("");

  const logOut = async()=>{
    const res1 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const reply1 = await res1.json();

    if (!reply1.status === 201) {
      const error = new Error(reply1.error);
      throw error;
    } else {
      setAccount(null);
      reDirect("/");
    }
  }

  return (
    <>
      <div className="profile-container m-4 row">
        <div className="profile-pic m-4 col-md-2">
          <Avatar sx={{ bgcolor: green[600] }} variant="square" style={{ height: "90px", width: "90px",fontSize:"35px" }}>
            {account.fname[0].toUpperCase()}
          </Avatar>
        </div>
        <div className="profile-data col-md-8 m-4">
          <h3>Name : {account.fname}</h3>
          <h3>Email : {account.email}</h3>
          <br />
          <br />
          <button className="btn btn-primary col-sm-4" onClick={logOut}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
