import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styling/dashboard.css";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Map = () => {
  const [data, setData] = useState({ startAddress: "", endAddress: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = ()=>{
    alert('hello');
  }

  return (
    <div className="p-3">
      <div className="form-container">
        <div className="header">
          <h3>We assist you in choosing the best route </h3>
        </div>
        <div className="form mx-5 my-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Start Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg, Mysuru"
                name="startAddress"
                value={data.startAddress}
                onChange={handleChange}
              />
            </Form.Group>{" "}
            <br />
            <Form.Group controlId="formName">
              <Form.Label>Destination Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg, Bengaluru"
                name="endAddress"
                value={data.endAddress}
                onChange={handleChange}
              />
            </Form.Group>{" "}
            <br />
            <div className="add-item" onClick={handleClick}>
              <AddCircleOutlinedIcon style={{color:"red"}}/>
              &nbsp; Add Way Point
            </div>
            <br />
            <Button variant="primary" type="submit" className="col-sm-3">
              Find Route
            </Button>
          </Form>
        </div>
      </div>
      <div className="map-container"></div>
    </div>
  );
};

export default Map;
