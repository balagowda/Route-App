// Signup.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./auth.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import '../styling/home.css';


const SignUp = () => {

  const [data, setData] = useState({
    fname:"",
    email: "",
    password: "",
    cpassword:"",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = data;
    // console.log(data);

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        password,
        cpassword,
      }),
    });

    const reply = await res.json();
    // console.log(reply);

    if (res.status === 422 || !data) {
      toast.warn(reply.error, {
        position: "top-center",
        });
    
    } else {
      toast.success('Registered Sucessfully', {
        position: "top-center",
        });
      setData({
        ...data,
        fname: "",
        email: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <>
      <NavBar />

      <div className="signup-container">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={data.fname}
              onChange={handleInput}
              name="fname"
            />
          </Form.Group>{" "}
          <br />
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
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={data.cpassword}
              onChange={handleInput}
              name="cpassword"
            />
          </Form.Group>{" "}
          <br />
          <Button variant="primary" type="submit" className="col-sm-5 p-2">
            Sign Up
          </Button>
          <br /><br />
          <p>
            Have an account? <Link to="/signin">Login</Link>
          </p>
        </Form>
        <ToastContainer/>
      </div>
    </>
  );
};

export default SignUp;
