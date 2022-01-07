import useWeatherServices from "../services/WeatherApi";
import { useState } from "react";
import SearchPanel from "../searchPanel/SearchPanel";
import WeatherList from "../weatherList/WeatherList";
import WeatherByDay from "../weatherByDay/WeatherByDay";
const App=()=> {
  
  const [search,setSearch]=useState('')
  const [city,setCity]=useState('Erevan')

  const onUpdateSearch = (search) => {
    setSearch(search);
  }
  const onUpdateAdd=(city)=>{
    console.log(city);
    setCity(city);
  }
  const content= city ? <WeatherList city={city}/>:null;
  return (
    <>
    {/* <SearchPanel onUpdateSearch={onUpdateSearch} onUpdateAdd={onUpdateAdd}></SearchPanel>
    {content} */}
    <WeatherByDay city={city}/>
    </>
  );
}

export default App;
