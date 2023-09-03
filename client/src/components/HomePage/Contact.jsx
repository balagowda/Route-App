import React from "react";
import NavBar from "../NavBar/NavBar";
import "../styling/home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import IMG from '../Images/map.png';

const Contact = () => {
  return (
    <div className="contact-body">
      <NavBar />
      <div className="contact-page">
        <h2>Contact Us</h2>
        <br />
        <h5>We'd Love to Hear From You!</h5>
        <p className="contact-paragraph">
          Have a question, feedback, or need assistance with our route app?
          Don't hesitate to get in touch with us. Our dedicated support team is
          here to help.
        </p>
        <div className="contact-feild row mx-auto">
          <div className="contact-form col-md-5">
            <Form className="my-3 p-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Tell Us</Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
              <Button variant="primary" type="button" className="col-sm-5">
                Submit
              </Button>
            </Form>
          </div>
          <div className="contact-list col-md-7">
            <div className="contact-icons">
              <PhoneInTalkIcon className="icon" />
              <InstagramIcon className="icon" />
              <TwitterIcon className="icon" />
              <PinterestIcon className="icon" />
              <FacebookIcon className="icon" />
            </div>
            <div className="contact-map">
              <img src={IMG} alt="img" className="map1"/>
            </div>
          </div>
        </div>
      </div>
      <div className="round-point-1"></div>
      <div className="round-point-2"></div>
    </div>
  );
};

export default Contact;
