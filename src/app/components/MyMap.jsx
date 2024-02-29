"use client"
import React from 'react';
import GoogleMapReact from 'google-map-react';
import 'dotenv/config'
import { FaLocationDot } from "react-icons/fa6";

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
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        disableDefaultUI={true}
        options={myOptions}
      >
        <LocationPin
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />

      </GoogleMapReact>
    </div>
  );
};

export default MyMap;

const LocationPin = ({ text }) => (
    <div className="pin">
        <FaLocationDot className="w-10 h-10 fill-primary-darken" />
    </div>
)