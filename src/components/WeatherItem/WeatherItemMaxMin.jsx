import React from 'react'
import classes from './WeatherItem.module.css'
import { useState } from 'react';
import { useRef } from 'react';


const WeatherItemMaxMin = (props) => {
  let MaxTemp = Math.floor(Number(JSON.stringify(props.temp_max)));
  let MinTemp = Math.floor(Number(JSON.stringify(props.temp_min)));
  return (
    <div className={classes.weatherItem}>
        <div className={classes.weatherItemTitle}>Макс. и мин. температура</div>
      <div className={classes.weatherItemMaxMin__inner}>
        <div className={classes.weatherItemMaxTemp}>Max {MaxTemp}</div>
        <div className={classes.weatherItemMinTemp}>Min {MinTemp}</div>
      </div>
    </div>
  );
}

export default WeatherItemMaxMin;