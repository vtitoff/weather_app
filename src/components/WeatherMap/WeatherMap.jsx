import React from 'react'
import classes from './WeatherMap.module.css'
import {LayerGroup, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {useState} from 'react';


const WeatherMap = (props) => {
    // const [position, setPosition] = useState({'lat': props.coords['lat'], 'lng': props.coords['lng']})
    console.log('render map...')

    return (
        <MapContainer center={[props.coords[0], props.coords[1]]} zoom={5}
                      className={classes.mapContainer}>
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
    );
}


export default WeatherMap;