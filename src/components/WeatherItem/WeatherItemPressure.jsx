import React from 'react'
import classes from './WeatherItem.module.css'
import { useState } from 'react';
import { useRef } from 'react';


const WeatherItemPressure = (props) => {
  return (
    <div className={classes.weatherItem}>
      <div className={classes.weatherItemPressure__inner}>
        <div className={classes.weatherItemTitle}>Давление воздуха</div>
        <div className={classes.weatherItemPressureValue}>{props.pressure} Па {props.city}</div>
      </div>

    </div>
  );
}

export default WeatherItemPressure;