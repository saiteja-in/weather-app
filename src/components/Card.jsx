import React from 'react'
import { useWeather } from '../context/weather'

const Card = () => {
    const weather=useWeather();
  return (
    <div className='container'>

    <div className='card'>
        <div className='card__content'>

        
      <img src={weather?.data?.current?.condition?.icon}/>
      <h1>{weather?.data?.current?.temp_c} c</h1>
      <h2>Feels like : {weather.data?.current?.feelslike_c} c</h2>
      <h2>Condition : {weather.data?.current?.condition?.text}</h2>
      <h3>{weather.data?.location?.name},{weather.data?.location?.country}</h3>
        </div>
    </div>
    </div>
  )
}

export default Card
