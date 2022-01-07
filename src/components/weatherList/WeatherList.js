import './WeatherList.css'
import { useEffect ,useState} from "react";
import useWeatherServices from "../services/WeatherApi";
import CloseButton from 'react-bootstrap/CloseButton'

const WeatherList=({city})=>{

  const [data,setData]=useState([]);
  const {getWeatherByCity}=useWeatherServices();

  const onCityLoaded=(city)=>{
    console.log(city)
    setData([...data,city]);
    console.log(data)
    
    
  }
  const cityDelete=(name)=>{
    setData(data.filter((item)=>(item.name!==name)))
  }
  useEffect(()=>{
    getWeatherByCity(city).then(onCityLoaded)
  },[city])
    
  
  return(
    <ItemsList data={data} cityDelete={cityDelete}/>
  )

}

const ItemsList=({data,cityDelete})=>{
  console.log(data)
const Elements=data.map((item,id)=>{
    return(
      <ListItem
      key={id}
      name={item.name}
      country={item.country}
      localTime={item.localTime}
      img={item.condImg}
      tempC={item.tempC}
      tempF={item.tempF}
      cityDelete={()=>cityDelete(item.name)}
      />
    )
  })
  return(
    <>
    {Elements}
    </>
  )
}
const ListItem=({name,country,localTime,img,tempC,tempF,cityDelete})=>{
  return(
    
    <div className='weatherItem'>
      <div>
        <div>City-{name}</div>
         <div>Country - {country}</div>
         <div>Local Time - {localTime}</div>
      </div>
      <div className='Temp'>
        <div className='delButton'>
            <CloseButton onClick={cityDelete} />
        </div>
         <img src={img} alt='weather img'></img>
        <div>
            <span>{tempC}C° </span>
            <span>{tempF}F° </span>
        </div>
       
      </div>
     
    </div>
  
  )
}
export default WeatherList;