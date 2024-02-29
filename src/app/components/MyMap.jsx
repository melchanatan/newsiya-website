"use client"
import React from 'react';
import GoogleMapReact from 'google-map-react';
import 'dotenv/config'

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
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default MyMap;
// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <p className="pin-text">{text}</p>
//     </div>
// )