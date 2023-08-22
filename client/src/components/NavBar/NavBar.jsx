import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  //toggle menu
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout user
  const logoutUser = async () => {
    handleClose();
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">MyRouter</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>&nbsp;&nbsp;
          <div>
            <Avatar
              sx={{ bgcolor: blue }}
              onClick={handleClick}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              id="basic-button"
              style={{cursor:"pointer"}}
            >
              BP
            </Avatar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} href="/"> <AccountCircleIcon style={{fontSize:20}}/>&nbsp; Profile</MenuItem>
              <MenuItem onClick={logoutUser} href="/logout"> <LogoutIcon style={{fontSize:20}}/>&nbsp; Logout</MenuItem>
            </Menu>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
