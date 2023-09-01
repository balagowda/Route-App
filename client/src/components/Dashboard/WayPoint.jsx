import React, { useState } from "react";
import "../styling/dashboard.css";
import { Button, Form } from "react-bootstrap";

const WayPoint = ({ click, wayAddress, setWayAddress }) => {
  const [point, setPoint] = useState("");

  const handleCancel = () => {
    setPoint("");
    click();
  };

  const handleAddPoint = () => {
    if (point.trim() !== "") {
      setWayAddress([...wayAddress, point]);
      click();
    }
  };

  return (
    <div className="way-point">
      <Form.Group controlId="wayAddress">
        <Form.Label>Way Point Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="eg, Mandya"
          name="wayAddress"
          value={point}
          onChange={(e) => {
            setPoint(e.target.value);
          }}
        />
      </Form.Group>{" "}
      <br />
      <Button
        variant="dark"
        type="reset"
        className="col-sm-2"
        onClick={handleCancel}
      >
        Cancel
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="success"
        type="submit"
        className="col-sm-3"
        onClick={handleAddPoint}
      >
        Add Way Point
      </Button>
    </div>
  );
};

export default WayPoint;
