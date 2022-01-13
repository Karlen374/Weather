import useWeatherServices from "../components/services/WeatherApi";
import Spinner from 'react-bootstrap/Spinner'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import './SingleCityWeather.css'

const SingleCityWeather =({})=>{

  const {city}=useParams()
  const { getWeatherByDays } = useWeatherServices();
  const [spinner,setSpinner]=useState(true);
  const [data,setData]=useState({});

  useEffect(()=>{
    onRequest(city)
  },[city])
  
  
  const onRequest=(city)=>{
    getWeatherByDays(city).then(onWeatherLoad)
  }
  const onWeatherLoad=(res)=>{
    setData(res);
    setSpinner(false);
    
  }
  const content=spinner?<div className="Spinner"><Spinner  animation="border" /></div>:<View data={data}/>;
  return(
    <>
    <Helmet>
        <meta
          name="description"
          content={`${city} weather`}
        />
        <title>{city}</title>
    </Helmet>
    {content}
    </>
  )
}
const View=({data})=>{
  return(
    <div className="weatherBlock">
    <h3>{data.name} ({data.country})</h3>
   
    <h4>Date: {data.day}</h4>
    <div>Sunrise: {data.sunrise1}</div>
    <div>Sunset: { data.sunset1}</div>
    <div className="weatherByDays">
        <div className="weatherBlock">
          <h4>Date: {data.day1} </h4>
          <span>Max Temp {data.day1MaxTempC}</span>
          <span>Min Temp {data.day1MinTempC}</span>
        </div>
        <div className="weatherBlock">
          <h4>Date: {data.day2}</h4>
          <span>Max Temp {data.day2MaxTempC}</span>
          
          <span>Min Temp {data.day2MinTempC}</span>
        </div>
    </div>
  </div>
  )
}

export default SingleCityWeather;