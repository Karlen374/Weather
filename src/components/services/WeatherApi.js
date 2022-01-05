import { useCallback } from "react";

const useWeatherServices=()=>{
  const _apiBase = 'https://api.weatherapi.com/v1/';
  const  _apikey = 'key= 1ff90ee44b664ef785f22329220501 ';
  const _baseCity='Berlin'
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
  const  getWeatherByCity= async(city=_baseCity)=>{
    const res = await request(`${_apiBase}current.json?${_apikey} &q=${city}&aqi=no`)
    return res.location;
  }
  return {getWeatherByCity};
}
export default useWeatherServices;