import React from 'react'
import NavBar from '../NavBar/NavBar';
import { NavLink } from 'react-router-dom';
import "../styling/home.css";

const Dashboard = () => {
  return (
    <>
    <NavBar />
    <div className="row m-2 gx-5">
      <div className="left-container col-md-3 rounded">
        <div className="row p-3" id="sidebar">
          <NavLink className="p-2 link" to='/dashboard'>Dashboard</NavLink>
          <NavLink className="p-2 link" to='/map'>Map</NavLink>
        </div>
      </div>
      <div className="right-container col-md-9 rounded">right</div>
    </div>
  </>
  )
}

export default Dashboard;