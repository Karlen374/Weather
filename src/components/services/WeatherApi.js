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
  return {getWeatherByCity};
}
export default useWeatherServices;