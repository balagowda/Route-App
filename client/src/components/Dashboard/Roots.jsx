import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styling/dashboard.css";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import WayPoint from "./WayPoint";
import Map from "./Map";

const Roots = () => {
  const [data, setData] = useState({ startAddress: "", endAddress: "" });
  const [visible, setVisible] = useState(false);
  const [wayAddress, setWayAddress] = useState("");
  const [directionsResponse,setDirectionsResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(data.startAddress===''||data.endAddress===''){
      return;
    }

    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results =await directionService.route({
      origin:data.startAddress,
      destination:data.endAddress,
      // eslint-disable-next-line no-undef
      travelMode:google.maps.TravelMode.DRIVING
    });
    setDirectionsResponse(results);

  };

  const CancelTrip = ()=>{
    data.startAddress=null;
    data.endAddress=null;
    setWayAddress("");
  }

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
                        <Form.Label>Way Point Address {i + 1}</Form.Label>
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
            <Button variant="dark" type="reset" className="col-sm-3" onClick={CancelTrip}>
              Cancel Trip
            </Button>&nbsp; &nbsp; &nbsp; 
            <Button variant="primary" type="submit" className="col-sm-3">
              Find Route
            </Button>
          </Form>
        </div>
      </div>
      <div className="map-container">
        <Map directionsResponse={directionsResponse}/>
      </div>
    </div>
  );
};

export default Roots;
