import React from 'react'
import classes from './WeatherItem.module.css'
import { useState } from 'react';
import { useRef } from 'react';


const WeatherItemWind = (props) => {
  let windDeg=function(props){
    if(String(props).length===3){
      return props
    }else if(String(props).length===2){
      return '0'+props
    }else{
      return '00'+props
    }
  };
  
  
  return (
    <div className={classes.weatherItem}>
      <div className={classes.weatherItemWind__inner}>
      <div className={classes.weatherItemTitle}>Ветер</div>
        <div className={classes.weatherItemWindSpeed}>Скорость {props.wind_speed} км/ч</div>
        <div className={classes.weatherItemWindDir}>Направление {windDeg(props.wind_deg)}</div>
      </div>

    </div>
  );
}

export default WeatherItemWind;