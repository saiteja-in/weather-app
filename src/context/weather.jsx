import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    console.log(response)
    setData(response);
  };
//   const fetchCurrentLocation = async () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       getWeatherDataForLocation(
//         position.coords.latitude,
//         position.coords.longitude
//       ),then((data)=>setData(data));
//     });
//   };

  return (
    <WeatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
