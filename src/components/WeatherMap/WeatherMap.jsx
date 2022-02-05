import React from 'react'
import classes from './WeatherMap.module.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

class WeatherMap extends React.Component {
    state = {
        lat: 55.702868,
        lng: 37.530865,
        zoom: 10
    };
    position = [this.state.lat, this.state.lng];

    render() {

        <MapContainer center={this.position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

    }
}


export default WeatherMap;


