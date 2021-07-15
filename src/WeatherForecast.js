import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    

    
    if(loaded) {
console.log(forecast);

    return (
     <div className="WeatherForecast">
        <div className="row">
            <div className="col"> 
            <WeatherForecastDay data={forecast[0]} />
        </div>
    </div>
    </div>
);
    } else {
        let apiKey = "b15c68d0eb463f5b86f355f615a747ce";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

    return null;  
   
 }
}