import React from 'react'
import classes from './WeatherMap.module.css'
import {LayerGroup, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
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
                <LayerGroup>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                     <TileLayer
                        attribution='&copy; <a href="https://tile.openweathermap.org/map/precipitation_new/10/55/37.png?appid=19c0bee458ab65a261e79f492074b660">WeatherMap</a> contributors'
                        url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=19c0bee458ab65a261e79f492074b660"
                    />
                </LayerGroup>
            </MapContainer>
        )

    }
}


export default WeatherMap;