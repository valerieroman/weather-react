import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <form className="search-city" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            className="form-control"
            placeholder="Search for a different city🔍"
            autoFocus="on"
            autoComplete="off"
            onChange={changeCity}
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
      <h2> {message} </h2>
    </form>
  );
}
