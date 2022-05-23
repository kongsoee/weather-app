import React from 'react'
import { Button } from 'react-bootstrap';

  //버튼누르면 도시 바뀜

const WeatherButton = ({cities,selectdeCity,handleCityChange}) => {

  return (
    <div>
        <Button className='btn' onClick={()=>handleCityChange("current")}>
    Current Location
  </Button>
        
        {cities.map((item) =>(
          <Button className='btn' onClick={()=>handleCityChange(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
