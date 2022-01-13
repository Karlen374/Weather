import { useState } from "react";
import './SearchPanel.css'
import Button from 'react-bootstrap/Button'

const SearchPanel=({onUpdateSearch,onUpdateAdd})=>{
  
  const [city,setCity]=useState('');

  
  const onUpdateAddLocal=(e)=>{
    const city=e.target.value;
    setCity(city);
    // onUpdateAddLocal(city)
  }
  const searchCity=()=>{
    if (city.length>0) onUpdateAdd(city);
    setCity('')
  }
  return(
    <>
     <div className="search-panel">
     <h3>Добавление...</h3>
      <input type="text"
            className="search-input"
            placeholder="Add..."
            value={city}
            onChange={onUpdateAddLocal}
            />
      
      <Button onClick={searchCity} variant="outline-success">Добавить</Button>{' '}
      
      </div>
    
      </>
  )
 
}
export default SearchPanel;