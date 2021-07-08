import React, { useState } from "react";
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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
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
    <h1> {weatherData.city}</h1>
            <br />
            <div className="row">
              <div className="col-4">
                <p className="details">
                  <ul>
                    <li>Pressure:{" "}{Math.round(weatherData.pressure)}%</li>
                    <li>Humidity:{" "}{Math.round(weatherData.humidity)}%</li>
                    <li>Wind:{" "}{Math.round(weatherData.wind)}{" "}mph</li>
                  </ul>
                </p>
              </div>
              <div className="col-8">
                <p className="city-info">
                  Last updated at:{" "}<FormattedDate date={weatherData.date} />
                </p>
                <ul>
                  <li className="text-capitalize" id="overall-weather">{weatherData.description}</li>
                  <li>
                    <div className="d-flex weather-temperature">
                      <img
                        src={weatherData.icon}
                        alt="Clear"
                        id="icon"
                        className="float-right"
                      />
                      <div className="float-right">
                        <div className="currentTemp">
                          <span id="temperature">
                            {Math.round(weatherData.temperature)}

                          </span>
                          <span className="units">
                            <span href="#" id="celsius-link" className="active">
                              °C
                            </span>{" "}
                            |{" "}
                            <span href="#" id="fahrenheit-link">
                              °F
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
          </div>
    );
} else {
  search();
  return "Loading...";
    }
}