import React from "react";
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props) {  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // set API key
        center={props.center}
        defaultZoom={props.zoom ? props.zoom : 11}
        >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844} 
          text="My Marker"
          />
      </GoogleMapReact>
    </div>
  );
}