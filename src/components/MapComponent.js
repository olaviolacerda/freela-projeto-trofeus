import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';



const MyMaps = withScriptjs(withGoogleMap((props) => {
    const marker = props.marker
    return (<GoogleMap defaultZoom={15} defaultCenter={marker} >
        <Marker
            position={marker}
            onClick={props.onToggleOpen}
        >
            <button>Click me please</button>
        </Marker>
    </GoogleMap>)
}))


class MapComponent extends React.Component {
    state = {
        initCoords: { lat: -30.066007, lng: -51.206691 },
    }


    render() {
        return (
            <div className="map-footer">
                <p>Estamos localizados na <b>Rua Dr. Dias da Cruz, 62 - Medianeira, Porto Alegre - RS, 90880-380.</b></p>
                <MyMaps
                    marker={this.state.initCoords}
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjfEUDZ4fcmlhniL8q06cCGFr1tCqcc9M&callback=initMap"
                    loadingElement={<div style={{ height: `250px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `250px` }} />}
                />

            </div>)
    }
}

export default MapComponent
