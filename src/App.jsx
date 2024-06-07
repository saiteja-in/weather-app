import React, { useEffect,useState } from 'react'
import "./App.css"
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/weather'
const App = () => {
  const[showcard,setShowcard]=useState(false);

  const weather=useWeather();
  // useEffect(()=>{
  //   weather.fetchCurrentLocation()

  // },[])
  const function123=()=>{
    weather.fetchData()
    setShowcard(true)
  }
  return (
    <div className='App'>
      <h1>Weather App</h1>
      <Input />
      <Button onClick={function123} />
      {/* <Card /> */}
      {showcard && <Card />}
    </div>
  )
}

export default App
