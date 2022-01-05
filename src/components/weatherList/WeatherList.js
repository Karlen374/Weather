import { useEffect ,useState} from "react";
import useWeatherServices from "../services/WeatherApi";

const WeatherList=({city})=>{
  
  const [country,setCountry]=useState('');
  const {getWeatherByCity}=useWeatherServices();
  const onCityLoaded=(city)=>{
    setCountry(city.country)
    console.log(city);
  }
  useEffect(()=>{
    console.log(city);
    getWeatherByCity(city).then(onCityLoaded)
  },[city])
    
  
  return(
    <div >Страна {country}</div>
  )

}

export default WeatherList;