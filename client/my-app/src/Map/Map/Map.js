import React from "react";
import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';

dotenv.config();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props) {  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} // set API key
        center={props.center}
        defaultZoom={12}
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