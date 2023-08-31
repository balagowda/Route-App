import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/dashboard.css";

const Leftbar = () => {
  return (
    <div className="row p-3" id="sidebar">
      <NavLink className="p-2 link" to="/dashboard/profile">
        Profile
      </NavLink>
      <NavLink className="p-2 link" to="/dashboard/map">
        Map
      </NavLink>
    </div>
  );
};

export default Leftbar;
