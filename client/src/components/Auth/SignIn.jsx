// Login.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <NavBar />

      <div className="login-container">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>{" "}
          <br />
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>{" "}
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br /><br />
          <p>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
