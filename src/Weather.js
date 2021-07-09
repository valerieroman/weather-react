import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import "./App.css";
import axios from "axios";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey= "b15c68d0eb463f5b86f355f615a747ce";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Search for a different city🔍"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
              </div>
        <div className="col-3">
          <input type="submit" 
          className="btn btn-success" 
          value="Search" />
        </div>
      </div>
    </form>
            </div>
    );
} else {
  search();
  return "Loading...";
    }
}