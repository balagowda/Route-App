import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "../styling/home.css";
import Leftbar from "./Leftbar";
import Profile from "./Profile";
import { LoginContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import Roots from "./Roots";

const Dashboard = () => {

  const { account, setAccount } = useContext(LoginContext);

  const reDirect = useNavigate("");

  useEffect(() => {
    if (!account) {
      reDirect("/signin"); 
    }
  }, [account,reDirect]);
  
  return (
    <>
      <NavBar />
      <div className="row m-2 gx-5">
        <div className="left-container col-md-3 rounded">
          <Leftbar />
        </div>
        <div className="right-container col-md-9 rounded">
          <Routes>
            <Route
              exact
              path="/profile"
              element={<Profile />}
            />
            <Route
              exact
              path="/roots"
              element={<Roots />}
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
