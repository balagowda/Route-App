import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Avatar from '@mui/material/Avatar';
import { green } from "@mui/material/colors";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">MyRouter</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>&nbsp;hadz
          <Avatar sx={{ bgcolor: green }}>BP</Avatar>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
