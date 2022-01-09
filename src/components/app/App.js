

import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { MainPage,SingleCityWeather } from "../../pages";

const App=()=> {
  
  // const [search,setSearch]=useState('')
  // const [city,setCity]=useState('Erevan')

  // const onUpdateSearch = (search) => {
  //   setSearch(search);
  // }
  // const onUpdateAdd=(city)=>{
  //   console.log(city);
  //   setCity(city);
  // }
  // const content= city ? <WeatherList city={city}/>:null;
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:city' element={<SingleCityWeather/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
