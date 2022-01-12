import { useCallback } from "react";

const useConversionServices=()=>{
  const _apikey='d9e1c420-72c1-11ec-bb57-65e1d907cb11';
  const _apiBase='https://freecurrencyapi.net/api/v2/latest?'

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
    const res= await request(`${_apiBase}apikey=${_apikey}&base_currency=${base_currency}`)
    return res
  }
  return {getConvertValue}
}
export default useConversionServices;