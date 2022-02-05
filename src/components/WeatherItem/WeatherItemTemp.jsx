import React from 'react'
import classes from './WeatherItem.module.css'
import {useState} from 'react';
import {useRef} from 'react';

const WeatherItemTemp = (props) => {
    let currentTemp = Math.floor(Number(JSON.stringify(props.temp)));
    let weatherImage = `http://openweathermap.org/img/wn/${props.image}.png`
    return (
        <div className={classes.weatherItem}>
            <div className={classes.weatherItemTemp__inner}>
                <div className={classes.weatherItemTitle}>Погода сейчас</div>
                <div className={classes.weatherItemTemp__box}>
                    <img className={classes.weatherItemImg} src={weatherImage}></img>
                    <div className={classes.weatherItemTemp__num}>{currentTemp}</div>
                    <div className={classes.weatherItemTemp__desc}>{props.desc}</div>
                </div>
            </div>

        </div>
    );
}

export default WeatherItemTemp;