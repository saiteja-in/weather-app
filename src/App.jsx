import React, { useEffect } from 'react'
import "./App.css"
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/weather'
const App = () => {
  const weather=useWeather();
  useEffect(()=>{
    weather.fetchCurrentLocation()

  },[])
  return (
    <div className='App'>
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh"/>
    </div>
  )
}

export default App
