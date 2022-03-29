import React from 'react'
import classes from './WeatherItem.module.css'


const WeatherItemPressure = (props) => {
  return (
    <div className={classes.weatherItem}>
      <div className={classes.weatherItemPressure__inner}>
        <div className={classes.weatherItemTitle}>Давление воздуха</div>
        <div className={classes.weatherItemPressureValue}>{props.pressure} Па</div>
      </div>

    </div>
  );
}

export default WeatherItemPressure;