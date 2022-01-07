import useWeatherServices from "../services/WeatherApi";
import { useEffect,useState } from "react";
import './WeatherByDay.css'
const WeatherByDay =({city})=>{

  const {getWeatherByDays}=useWeatherServices();
  const [data,setData]=useState({})
  useEffect(()=>{
    onRequest(city)
  },[city])

  const onRequest=(city)=>{
    getWeatherByDays(city).then(onWeatherLoad)
  }
  const onWeatherLoad=(res)=>{
    setData(res);
    
  }
  return(
    <div className="weatherBlock">
      <h3>{data.name} ({data.country})</h3>
      <h4>Date: {data.day}</h4>
      <span></span>
      <span></span>
      <div className="weatherByDays">
          <div>
            <h4>Date: {data.day1} </h4>
            <span>Max Temp {data.day1MaxTempC}</span>
            <span>Min Temp {data.day1MinTempC}</span>
          </div>
          <div>
            <h4>Date: {data.day2}</h4>
            <span>Max Temp {data.day2MaxTempC}</span>
            <span>MIn Temp {data.day2MinTempC}</span>
          </div>
      </div>
    </div>
  )
}
export default WeatherByDay;