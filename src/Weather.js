import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./Footer";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 7:00",
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="search-city">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Search for a different city🔍"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
                id="search-city-input"
              />
              </div>
        <div className="col-6">
          <input type="submit" className="btn btn-success" value="Search" />
          <input
            type="submit"
            className="btn btn-primary"
            value="Current Location"
            id="current-location-button"
          />
          <br />
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