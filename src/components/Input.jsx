import React from "react";
import { useWeather } from "../context/weather";

const Input = () => {
    const weather=useWeather();
  return (
    <input
        className="input-field"
      placeholder="Enter the Location"
      value={weather.searchCity || ""}
      onChange={(e)=>weather.setSearchCity(e.target.value)}
    ></input>
  );
};

export default Input;
