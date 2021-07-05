import React from "react";
import Search from "./Search";
import "./App.css";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card">
            <h1>Philadelphia</h1>
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
            <Search />
          </div>
        </div>
<Footer />
      </div>
    </div>
  );
}
