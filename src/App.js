import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WeatherItemTemp from './components/WeatherItem/WeatherItemTemp';
import WeatherItemMaxMin from './components/WeatherItem/WeatherItemMaxMin';
import WeatherItemPressure from './components/WeatherItem/WeatherItemPressure';
import WeatherItemWind from './components/WeatherItem/WeatherItemWind';
import Title from './components/Title/Title';



function App() {
  let data = {
    "coord": {
      "lon": 30.3364,
      "lat": 53.9139
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "переменная облачность",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 21.06,
      "feels_like": 20.27,
      "temp_min": 21.06,
      "temp_max": 21.06,
      "pressure": 1019,
      "humidity": 40
    },
    "visibility": 10000,
    "wind": {
      "speed": 4,
      "deg": 265
    },
    "clouds": {
      "all": 40
    },
    "dt": 1629632677,
    "sys": {
      "type": 1,
      "id": 8938,
      "country": "BY",
      "sunrise": 1629600566,
      "sunset": 1629652443
    },
    "timezone": 10800,
    "id": 625665,
    "name": "Mogilev",
    "cod": 200
  }
  const [weatherData, setWeatherData] = useState(data);
  let city = 'Mogilev'
  // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=19c0bee458ab65a261e79f492074b660`)
  //   .then(response => response.json())
  //   .then(json => setWeatherData(json)) // потом включить, пока заменим запрос с сервера статичным json


  // useEffect(() => {
  //   const L = require('leaflet');
  //   let current_lat = 53.9139;
  //   let current_long = 30.3364;
  //   let current_zoom = 16;
  //   let center_lat = current_lat;
  //   let center_long = current_long;
  //   let center_zoom = current_zoom;
  //   let map = L.map('map', {
  //     center: [center_lat, center_long],
  //     zoom: center_zoom
  //   });
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);
  // });


  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')</style>
      <div className="container">
        <Title text={city}></Title>
        <Title text="Сегодня"></Title>
        <div className="weather__items-inner">
          <div>
            <WeatherItemMaxMin temp_min={weatherData.main.temp_min} temp_max={weatherData.main.temp_max}></WeatherItemMaxMin>
            <WeatherItemPressure pressure={weatherData.main.pressure}></WeatherItemPressure>
          </div>
          <div>
            <WeatherItemTemp temp={weatherData.main.temp} desc={weatherData.weather[0].description} image={weatherData.weather[0].icon}></WeatherItemTemp>
            <WeatherItemWind wind_speed={weatherData.wind.speed} wind_deg={weatherData.wind.deg}></WeatherItemWind>
          </div>
          {/*<WeatherMap></WeatherMap>*/}
          {/* <div className={classes.weatherMap} id="map"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;

