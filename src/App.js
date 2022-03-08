import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import WeatherItemTemp from './components/WeatherItem/WeatherItemTemp';
import WeatherItemPressure from './components/WeatherItem/WeatherItemPressure';
import WeatherItemWind from './components/WeatherItem/WeatherItemWind';
import WeatherMap from "./components/WeatherMap/WeatherMap";
import Title from './components/Title/Title';
import 'leaflet/dist/leaflet.css';
import Bar from "./components/Bar/Bar";

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
    let city = 'Mogilev'

    const [weatherData, setWeatherData] = useState(data);
    const [cityValue, setCityValue] = useState(city)

    function update_data(cityValue) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&lang=ru&appid=19c0bee458ab65a261e79f492074b660`)
            .then(response => response.json())
            .then(json => setWeatherData(json)) // потом включить, пока заменим запрос с сервера статичным json
    }

    function changeCityValue(e) {
        setCityValue(e.target.value)
        console.log('пришли данные из компонента bar')
        console.log(`ENV ${process.env}`)
    }

    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Weather</a>
                    <Bar cityValue={cityValue} changeCityValue={changeCityValue}/>
                </div>
            </nav>
            <div className="content">
                <div className="container">
                    <Title text={cityValue}/>
                    <Title text="Сегодня"/>
                    <div className="weather-items__wrapper">
                        <div className="weather__items-inner">
                            <div>
                                <WeatherItemPressure pressure={weatherData.main.pressure}/>
                                <WeatherItemTemp temp={weatherData.main.temp} desc={weatherData.weather[0].description}
                                                 image={weatherData.weather[0].icon}/>
                                <WeatherItemWind wind_speed={weatherData.wind.speed}
                                                 wind_deg={weatherData.wind.deg}/>
                            </div>
                        </div>
                        <WeatherMap lat={weatherData.coord.lat} lng={weatherData.coord.lon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

