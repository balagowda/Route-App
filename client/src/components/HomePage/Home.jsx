import React from "react";
import NavBar from "../NavBar/NavBar";
import "../styling/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-page">
        <div className="homepage-left ">
          <div className="animate-text">
            <h3 class="animate-charcter">
              A mapping facilitates <br />
              easy exploration <br />
              and navigation.
            </h3>
          </div>
        </div>
        <div className="homepage-right my-3">
          <div className="homepage-root">
            <Link to="/signup" className="link-menu mx-auto">
              Sign Up
            </Link>
            <Link to="signin" className="link-menu mx-auto">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
