import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

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
                      <div className="float-right">
                      <WeatherIcon code={props.data.icon} size={90} />
                      </div>
                      <div className="float-right">
                        <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                      </div>
                     </li>
                      </ul>
                   </div>
              </div>
        </div>
        );
    }
