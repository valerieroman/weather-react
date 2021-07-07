import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card">
            <Weather defaultCity="Philadelphia" />
            <br />
            <div className="row">
              <div className="col-4">
                <p className="details">
                  <ul>
                    <li>Pressure:</li>
                    <li>Humidity:</li>
                    <li>Wind:</li>
                    <li>Feels Like:</li>
                  </ul>
                </p>
              </div>
              <div className="col-8">
                <p className="city-info">
                  Last updated at: <span id="date"></span>
                </p>
                <ul>
                  <li id="overall-weather"> Cloudy</li>
                  <li>
                    <div className="d-flex weather-temperature">
                      <img
                        src=" "
                        alt="Clear"
                        id="icon"
                        className="float-right"
                      />
                      <div className="float-right">
                        <div className="currentTemp">
                          <span id="temperature"> 59 </span>
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
            </div>
            <div className="days-forecast" id="weather-forecast-temp"></div>
          </div>
        </div>
<footer>
This project was coded by{" "}
<a href="https://www.linkedin.com/in/valerie-rom%C3%A1n-de-jes%C3%BAs-189069185/" target="_blank" rel="noopener noreferrer">
 Valerie Roman De Jesus </a>{" "}and is{" "} <a href= "https://github.com/valerieroman/weather-react" target="_blank" rel="noreferrer"> open-sourced on GitHub 
          </a>
</footer>
      </div>
    </div>
  );
}
