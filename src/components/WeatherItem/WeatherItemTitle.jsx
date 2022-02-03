import React from 'react'
import classes from './WeatherItem.module.css'
import { useState } from 'react';
import { useRef } from 'react';

const WeatherItemTitle = (props) => {
  return (
    <div className={classes.weatherItemTitle}>
     {props.title}
    </div>
  );
}

export default WeatherItemTitle;