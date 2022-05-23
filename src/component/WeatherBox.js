import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className='weather-box'>
        <h1>{weather?.name}</h1>
        <h2>{weather?.main.temp}°C</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox