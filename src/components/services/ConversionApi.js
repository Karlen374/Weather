import { useCallback } from "react";

const useConversionServices=()=>{
  const _apikey='d9e1c420-72c1-11ec-bb57-65e1d907cb11';
  const _apiBase='https://freecurrencyapi.net/api/v2/'
  
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

  const getConvertValue=async(base_currency='USD')=>{
    const res= await request(`${_apiBase}latest?apikey=${_apikey}&base_currency=${base_currency}`)
    return res
  }
  const getHistoricalRates=async(base_currency='USD',date_from,date_to)=>{
    const res=await request(`${_apiBase}historical?apikey=${_apikey}&base_currency=${base_currency}&date_from=${date_from}&date_to=${date_to}`)
    return res
  }

  return {getConvertValue,getHistoricalRates}
  
}
export default useConversionServices;