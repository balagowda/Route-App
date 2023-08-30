import React, { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { LoginContext } from "../context/context";
import { useNavigate } from "react-router-dom";

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
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;