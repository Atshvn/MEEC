
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

const { compose, withProps, withStateHandlers } = require("recompose");


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 10.822259645376581, lng: 106.68745776178493 }}
    >
        <Marker
            position={{ lat: 10.822259645376581, lng: 106.68745776178493 }}
        />

    </GoogleMap>
));

const SimpleMap = () => {
    return (
        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOkR9tW-zKh72ZVYVDuFc6Sym01EN_W9E&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}
export default SimpleMap;
