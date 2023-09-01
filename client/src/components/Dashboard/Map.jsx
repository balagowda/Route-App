import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styling/dashboard.css";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import WayPoint from "./WayPoint";

const Map = () => {
  const [data, setData] = useState({ startAddress: "", endAddress: "" });
  const [visible, setVisible] = useState(false);
  const [wayAddress, setWayAddress] = useState("");

  console.log(wayAddress);

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

  const handleClick = () => {
    setVisible(!visible);
  };

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

            {wayAddress.length ? (
              <>
                {wayAddress.map((address, i) => {
                  return (
                    <div className="way-address" key={i}>
                      <br />
                      <Form.Group controlId="formName">
                        <Form.Label>Way Point Address {i+1}</Form.Label>
                        <Form.Control
                          type="text"
                          name="wayAddress"
                          value={address}
                          readOnly
                        />
                      </Form.Group>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}

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

            {visible ? (
              <WayPoint
                click={handleClick}
                wayAddress={wayAddress}
                setWayAddress={setWayAddress}
              />
            ) : (
              <div className="add-item" onClick={handleClick}>
                <AddCircleOutlinedIcon style={{ color: "red" }} />
                &nbsp; Add Way Point
              </div>
            )}

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
