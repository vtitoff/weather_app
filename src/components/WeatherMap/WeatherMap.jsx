import React from 'react'
import classes from './WeatherMap.module.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

class WeatherMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 55.702868,
            lng: 37.530865,
            zoom: 10
        };
    }

    render() {
        return (
            <MapContainer center={[this.props.lat, this.props.lng]} zoom={13} className={classes.mapContainer}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <div>Map</div>
        </MapContainer>
        )

    }
}


export default WeatherMap;