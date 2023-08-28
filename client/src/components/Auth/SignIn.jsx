//Sign.js

import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from "../context/context";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

// console.log(data);
const { account, setAccount } = useContext(LoginContext);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const redirect = useNavigate("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { email, password } = data;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const reply = await res.json();

    if (res.status === 422 || !data) {
      toast.warn(reply.error, {
        position: "top-center",
      });
    } else {
      redirect("/");
      // setAccount(reply);
      toast.success("Login Sucess", {
        position: "top-center",
      });
      setData({
        ...data,
        email: "",
        password: "",
      });
    }
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
              value={data.email}
              onChange={handleInput}
              name="email"
            />
          </Form.Group>{" "}
          <br />
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handleInput}
              name="password"
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
        <ToastContainer/>
      </div>
    </>
  );
};

export default SignIn;
