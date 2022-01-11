import { useCallback } from "react";

const useWeatherServices=()=>{
  const _apiBase = 'https://api.weatherapi.com/v1/';
  const  _apikey = 'key= 1ff90ee44b664ef785f22329220501 ';

  const request=useCallback(async(url,method='GET',body=null,headers={'Content-Type':'application/json'})=>{

    try{
      const response=await fetch(url,{method,body,headers});
      if (!response.ok){
        throw new Error(`Could not fetch ${url} status: ${response.status}`)
      }
      const data=await response.json();
      return data;
    }catch(e){
  
      throw e;
    }
  },[])
  const  getWeatherByCity= async(city)=>{
    const res = await request(`${_apiBase}current.json?${_apikey} &q=${city}&aqi=no`)
    return _transformWeather(res);
  }
  const getWeatherByDays=async(city)=>{
    const res=await request(`${_apiBase}forecast.json?${_apikey}&q=${city}&days=8&aqi=no&alerts=no`)
    return _transformWeatherByDays(res);
  }
  const _transformWeather=(res)=>{
    return{
      name:res.location.name,
      country:res.location.country,
      localTime:res.location.localtime,
      tempC:res.current.temp_c,
      tempF:res.current.temp_f,
      condInfo:res.current.condition.text,
      condImg:res.current.condition.icon
    }
  }
  const _transformWeatherByDays=(res)=>{
    // let arr=[res.forecast.forecastday[1].day.maxtemp_c,res.forecast.forecastday[2].day.maxtemp_c];
    // console.log(arr)
    // let arr=[];
    // for(let i=0;i<2;i++){
    //   arr[i]=res.forecast.forecastday[i+1].day.maxtemp_c;
    // }
    console.log(res);
    console.log(`res=${res}`)
    return{
      name:res.location.name,
      country:res.location.country,
      localTime:res.location.localtime,
      // dayMaxTempC:arr,
      lat: res.location.lat,
      lon:res.location.lon,

      day:res.forecast.forecastday[0].date,
      day1:res.forecast.forecastday[1].date,
      day2:res.forecast.forecastday[2].date,
      dayMaxTempC:res.forecast.forecastday[0].day.maxtemp_c,
      day1MaxTempC:res.forecast.forecastday[1].day.maxtemp_c,
      day2MaxTempC: res.forecast.forecastday[2].day.maxtemp_c,
      
      sunrise1:res.forecast.forecastday[0].astro.sunrise,
      sunrise2:res.forecast.forecastday[1].astro.sunrise,
      sunrise3:res.forecast.forecastday[2].astro.sunrise,

      sunset1: res.forecast.forecastday[0].astro.sunset,
      sunset2: res.forecast.forecastday[1].astro.sunset,
      sunset3: res.forecast.forecastday[2].astro.sunset,


      
      dayMinTempC:res.forecast.forecastday[0].day.mintemp_c,
      day1MinTempC:res.forecast.forecastday[1].day.mintemp_c,
      day2MinTempC:res.forecast.forecastday[2].day.mintemp_c,

    }
  }
  return {getWeatherByCity,getWeatherByDays};
}
export default useWeatherServices;