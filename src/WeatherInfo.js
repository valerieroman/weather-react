import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div>
 <h1> {props.data.city}</h1>
            <br />
            <div className="row">
              <div className="col-4">
                <p className="details">
                  <ul>
                    <li>Pressure:{" "}{Math.round(props.data.pressure)}%</li>
                    <li>Humidity:{" "}{Math.round(props.data.humidity)}%</li>
                    <li>Wind:{" "}{Math.round(props.data.wind)}{" "}mph</li>
                  </ul>
                </p>
              </div>
              <div className="col-8">
                <p className="city-info">
                  Last updated at:{" "}<FormattedDate date={props.data.date} />
                </p>
                <ul>
                  <li className="text-capitalize" id="overall-weather">{props.data.description}</li>
                  <li>
                    <div className="d-flex weather-temperature">
                      <img
                        src={props.data.icon}
                        alt="Clear"
                        id="icon"
                        className="float-right"
                      />
                      <div className="float-right">
                        <div className="currentTemp">
                          <span id="temperature">
                            {Math.round(props.data.temperature)}

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
        </div>
        </div>

    );
}