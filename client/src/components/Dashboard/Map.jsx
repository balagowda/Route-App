import React, { useState } from "react";
import "../styling/dashboard.css";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Skeleton from "@mui/material/Skeleton";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const center = {
  lat: 13.171860787743926,
  lng: 77.5363320609042,
};

const Map = ({ directionsResponse }) => {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  return (
    <div className="routing-area bg-dark">
      {isLoaded ? (
        <>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
          <div onClick={() => map.panTo(center)} className="geo-pointer">
            <GpsFixedIcon
              style={{
                color: "white",
                cursor: "pointer",
                zIndex: 2,
                fontSize: "30px",
              }}
            />
          </div>
        </>
      ) : (
        <Skeleton
          sx={{ bgcolor: "white.900" }}
          variant="rectangular"
          animation="wave"
          width={610}
          height={318}
        />
      )}
    </div>
  );
};

export default Map;
