import SearchPanel from "../components/searchPanel/SearchPanel";
import WeatherList from "../components/weatherList/WeatherList";
import { useState } from "react";
const MainPage=()=>{
  const [city,setCity]=useState('Moscow')

  // const onUpdateSearch = (search) => {
  //   setSearch(search);
  // }
  const onUpdateAdd=(city)=>{
    console.log(city);
    setCity(city);
  }
  const content= city ? <WeatherList city={city}/>:null;
  return(
    <>
      <SearchPanel onUpdateAdd={onUpdateAdd}/>
      {content}
    </>
  )
}
export default MainPage