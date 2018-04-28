import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import ReactTooltip from 'react-tooltip'
const MY_API_KEY = 'AIzaSyBMUGGllr7jNkmhdFKfZT-1PCrV9-4Fbmw';

const Marker = () => <div >
    <i data-tip data-for='marker' className='fa fa-map-marker-alt marker' data-event='click focus'></i>
    <ReactTooltip id='marker' delayHide={500} effect='solid' className="map-tooltip">
        <span>Rua Dr. Dias da Cruz, 62 - Medianeira, Porto Alegre - RS, 90880-380</span>
    </ReactTooltip>
</div>;

const options = {
    overviewMapControl: true,
    streetViewControl: true,
    rotateControl: true,
    scrollwheel: false,
    panControl: true,
    mapTypeControl: true,
    styles: [{ stylers: [{ 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
}
export default class Map extends Component {
    static defaultProps = {
        center: { lat: -30.0660133, lng: -51.2066951 },
        zoom: 16
    }


    render() {
        return (
            <GoogleMapReact
                options={options}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={{
                    key: MY_API_KEY,
                    language: 'pt-BR',
                    region: 'pt_BR',
                }}>

                <Marker lat={-30.0660133} lng={-51.2066951} />
            </GoogleMapReact>
        )
    }
}