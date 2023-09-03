//Sign.js

import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../context/context";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

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

  useEffect(() => {
    if (account) {
      redirect("/dashboard/roots");
    }
  }, [account, redirect]);

  // Recaptcha things
  const [valid_token, setValidToken] = useState([]);

  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;

  const captchaRef = useRef(null);

  // verify captcha
  
  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
    
  };

  // form submitting

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (token) {
      try {
        var valid_tokens = await verifyToken(token);
        if(valid_tokens.length<1) return;
        setValidToken(valid_tokens);
      } catch (error) {
        console.log(error);
        return;
      }
      // console.log(valid_token);

      if (!(valid_tokens[0].success === true)) {
        console.log("not verified");
        toast.warn("Please verify you are not bot", {
          position: "top-center",
        });
        return;
      }

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
        redirect("/dashboard/roots");
        toast.success("Login Sucess", {
          position: "top-center",
        });
        setData({
          ...data,
          email: "",
          password: "",
        });
      }
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
          <ReCAPTCHA
            className="recaptcha"
            sitekey={SITE_KEY}
            ref={captchaRef}
          />
          <br />
          <Button variant="primary" type="submit" className="col-sm-6 p-2">
            Login
          </Button>
          <br />
          <br />
          <p>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </Form>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignIn;
