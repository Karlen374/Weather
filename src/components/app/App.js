import useWeatherServices from "../services/WeatherApi";

const App=()=> {
  const {getWeatherByCity}=useWeatherServices();

  const getWeather=()=>{
    console.log(getWeatherByCity());
  }
  return (
    <button onClick={getWeather}>Click</button>
  );
}

export default App;
