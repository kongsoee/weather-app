import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp} 체감온도 : {weather?.main.feels_like} </h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox