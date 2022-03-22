import React from 'react'
import classes from './WeatherItem.module.css'

const WeatherItemTitle = (props) => {
  return (
    <div className={classes.weatherItemTitle}>
     {props.title}
    </div>
  );
}

export default WeatherItemTitle;