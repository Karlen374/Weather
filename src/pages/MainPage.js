import SearchPanel from "../components/searchPanel/SearchPanel";
import WeatherList from "../components/weatherList/WeatherList";
import { useState } from "react";
import { Helmet } from "react-helmet";

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
          <Helmet>
               <meta
                  name="description"
                  content="WeatherList"
                  />
               <title>Weather information portal</title>
          </Helmet>
      <SearchPanel onUpdateAdd={onUpdateAdd}/>
      {content}
    </>
  )
}
export default MainPage