import {useEffect,useState} from 'react'
import './App.css';
import './common.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";
//현재위치 기반의 날씨가 보인다
//도시, 섮씨.화씨 . 날시의 상태
//5개의 버튼ㅇ ㅣ있다 >현재위치, 다른도시
//도시별 날씨가 나온다
//다시 현재 위치기반버튼을 누르면 다시 현재위치로 나옴
//데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {
  //weather state만들기
  const [weather,setweather]=useState(null);
  //로딩스피너
  const [loading,setLoading]=useState(false);
  //도시정보
  const [city,setCity]=useState('');
  const cities=['Monza','Bahrain','Monte Carlo','Miami']

  //현재위치 정하는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  //api 불러오기
  const getWeatherByCurrentLocation =async(lat,lon)=>{
    let url=`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f2a48faba1962e4b3b139d11d6c5438&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data =await response.json();
    setweather(data);
    setLoading(false);
  }

  //도시별 날씨 보여주기
  const getweatherByCity =async()=>{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2a48faba1962e4b3b139d11d6c5438&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setweather(data);
    setLoading(false);
  
  }


  //첫번째 ui랜더 후에 작동됨
  //useEffect두개 하면 안됨 그래서 한개 안에 넣음
  useEffect(()=>{
    if(city===""){
    getCurrentLocation();
   } else{ getweatherByCity();
    }
  },[city]);

  //현재 위치 날씨 보여주기
  const handleCityChange = (city) => {
    if (city === "current") {
      getCurrentLocation();
    } else {
      setCity(city);
    }
  };
  return (
    <div>
      {loading?(
      <div className='container'>
      <ClipLoader color="#000000" loading={loading} size={150} />
      </div>
      ):(
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} handleCityChange={handleCityChange} selectdeCity={city}/>
     </div>
     )}
    </div>
  );
}

export default App;
