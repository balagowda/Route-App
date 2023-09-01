import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Avatar from "@mui/material/Avatar";
import { green} from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../styling/nav.css';

const NavBar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  const [anchorEl, setAnchorEl] = useState(false);

  const reDirect = useNavigate("");

  //toggle menu
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   //user data fetching
   const getuserData = async () => {
    const res = await fetch("/userdata", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const reply = await res.json();

    if (res.status !== 201) {
      console.log("Error in fetching user data");
    } else {
      setAccount(reply);
    }};

  //user profile
  const userProfile=()=>{
    handleClose();
    reDirect('/dashboard/profile');
  }

  //logout user
  const logoutUser = async () => {
    handleClose();
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
      toast.success("Logout Successfull", {
        position: "top-center",
      });
      reDirect("/");
    }
  };

  //useeffect call
  useEffect(() => {
    getuserData();
  }, []);

  return (
    <Navbar className="nav-bar-main" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/" className="brand">MyRouter</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>&nbsp;&nbsp;
          <div>
            {account ?  (
              <Avatar
                sx={{ bgcolor: green[600] }}
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                id="basic-button"
                style={{ cursor: "pointer" }}
                title={account.fname}
              >
                {account.fname[0].toUpperCase()}
              </Avatar>
            ):(
              <Avatar sx={{ bgcolor: green[600] }}/>
            ) }
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={userProfile} >
                {" "}
                <AccountCircleIcon style={{ fontSize: 20 }} />
                &nbsp; Profile
              </MenuItem>
              <MenuItem onClick={logoutUser} >
                {" "}
                <LogoutIcon style={{ fontSize: 20 }} />
                &nbsp; Logout
              </MenuItem>
            </Menu>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
