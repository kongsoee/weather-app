import {useEffect,useState} from 'react'
import './App.css';
//현재위치 기반의 날씨가 보인다
//도시, 섮씨.화씨 . 날시의 상태
//5개의 버튼ㅇ ㅣ있다 >현재위치, 다른도시
//도시별 날씨가 나온다
//다시 현재 위치기반버튼을 누르면 다시 현재위치로 나옴
//데이터를 들고오는 동안 로딩 스피너가 돈다
function App() {

  //현재위치 정하는 함수
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWheatherByCurrentLocation(lat,lon);
    })
  };

  //api 불러오기
  const getWheatherByCurrentLocation =async(lat,lon)=>{
    let url=`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f2a48faba1962e4b3b139d11d6c5438`
    let response = await fetch(url);
    let data =await response.json();
    console.log("data",data);
  }


  useEffect(()=>{
    getCurrentLocation()
  })
  return (
    <div>
     hu
    </div>
  );
}

export default App;
