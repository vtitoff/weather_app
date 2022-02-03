import React from 'react'
import classes from './WeatherItem.module.css'
import { useState } from 'react';
import { useRef } from 'react';

const WeatherItem = (props) => {
  
  return (
    <div className={classes.weatherItem}>
      {props.body}
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
}

export default WeatherItem;