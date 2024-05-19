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

  const customMapStyling = 
  [
    {
      "elementType": "labels",
      "stylers": [
        {
          "color": "#5b718b"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#333b44"
        }
      ]
    },
    {
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#333b44"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#333b44"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#333b44"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "stylers": [
        {
          "color": "#fffaf3"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fffaf3"
        }
      ]
    },
    {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fffaf3"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "color": "#e4cbaf"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e4cbaf"
        }
      ]
    },
    {
      "featureType": "poi.government",
      "stylers": [
        {
          "color": "#e4cbaf"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "color": "#b7b1a4"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#c3ac93"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c3ac93"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#d9cef2"
        }
      ]
    }
  ]

  var myOptions = {
    disableDefaultUI: true,
    // styles: customMapStyling,
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
        <FaLocationDot className="w-10 h-10 fill-accent-darken" />
    </div>
)