import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="card">
        <Weather defaultCity="Philadelphia" />
           
<footer>
This project was coded by{" "}
<a href="https://www.linkedin.com/in/valerie-roman-dejesus/" target="_blank" rel="noopener noreferrer">
 Valerie Roman De Jesus </a>{" "}and is{" "} <a href= "https://github.com/valerieroman/weather-react" target="_blank" rel="noreferrer"> open-sourced on GitHub 
          </a> and{" "} <a href="https://reverent-franklin-00f3a8.netlify.app/"target="_blank" rel="noopener noreferrer" >hosted on Netlify</a>
</footer>
      </div>
      </div>
      </div>
  );
}
