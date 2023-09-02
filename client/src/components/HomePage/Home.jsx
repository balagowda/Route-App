import React from "react";
import NavBar from "../NavBar/NavBar";
import "../styling/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-page">
        <div className="homepage-left ">
          <div className="home-img">
            
          </div>
        </div>
        <div className="homepage-right my-3">
          <div className="homepage-root">
            <Link to="/signup" className="link mx-auto">
              Sign Up
            </Link>
            <Link to="signin" className="link mx-auto">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
