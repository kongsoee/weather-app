import React from 'react'
import { Button } from 'react-bootstrap';

  //버튼누르면 도시 바뀜

const WeatherButton = ({cities,setCity}) => {

  return (
    <div>
        <Button className='btn'>Current Location</Button>
        
        {cities.map((item) =>(
          <Button className='btn' onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton