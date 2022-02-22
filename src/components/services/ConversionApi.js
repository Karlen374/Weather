
import { useHttp } from "../../hooks/http.hook";

const useConversionServices=()=>{
  const _apikey='d9e1c420-72c1-11ec-bb57-65e1d907cb11';
  const _apiBase='https://freecurrencyapi.net/api/v2/'
  const {request}=useHttp()
  

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