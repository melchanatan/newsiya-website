"use client"
import React from 'react';
import GoogleMap from 'google-maps-react-markers'
import { FaLocationDot } from "react-icons/fa6";
require('dotenv').config()

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MyMap = ({className}) => {
  const defaultProps = {
    center: {
      lat: 16.17935172307012,
      lng: 103.30445666498697
    },
    zoom: 17
  };

  var myOptions = {
    disableDefaultUI: true,
    // mapTypeId: google.maps.MapTypeId.ROADMAP  
  }

  return (
    <div className={className}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        disableDefaultUI={true}
        options={myOptions}
      >
        <LocationPin
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />

      </GoogleMap>
    </div>
  );
};

export default MyMap;

const LocationPin = ({ text }) => (
    <div style={{
      position: "absolute",
      top: "100%",
      left: "50%",
      height: "24px",
      width: "24px",
      transform: "translate(-50%, -100%)",
      }}>
        <FaLocationDot className="w-10 h-10 fill-primary-darken" />
    </div>
)