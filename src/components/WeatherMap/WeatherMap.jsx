import React from 'react'
import classes from './WeatherMap.module.css'
import { Map, TileLayer } from "leaflet";
import 'leaflet/dist/leaflet.css';

class WeatherMap extends React.Component {
    state = {
      lat: 55.702868,
      lng: 37.530865,
      zoom: 10
    };
    L = require('leaflet');
    render() {
      var center = [this.state.lat, this.state.lng];
  
      return (
        <Map className={classes.weatherMap} zoom={this.state.zoom} center={center}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      );
    }
  }
  

export default WeatherMap;


