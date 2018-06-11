import React, { Component } from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const MY_API_KEY = "AIzaSyBMUGGllr7jNkmhdFKfZT-1PCrV9-4Fbmw";
const FaAnchor = require("react-icons/lib/fa/anchor");

export const Frase = <div>Frase</div>;
const GoogleMapReact = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -30.0660133, lng: -51.2066951 }}
  >
    <Marker
      position={{ lat: -30.0660133, lng: -51.2066951 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
         <span>Rua Dr. Dias da Cruz, 62 - Medianeira - POA/RS</span>
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

export default class Map extends Component {
  render() {
    return <GoogleMapReact />;
  }
}
