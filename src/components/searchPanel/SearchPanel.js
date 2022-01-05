import { useState } from "react";

const SearchPanel=({onUpdateSearch,onUpdateAdd})=>{
  const[search,setSearch]=useState('');
  const [city,setCity]=useState('');

  const  onUpdateSearchLocal = (e) => {
    const search = e.target.value;
    setSearch( search );
    onUpdateSearch(search);

  }
  const onUpdateAddLocal=(e)=>{
    const city=e.target.value;
    setCity(city);
    // onUpdateAddLocal(city)
  }
  const searchCity=()=>{
    onUpdateAdd(city);
  }
  return(
    <>
    <div className="search-panel">
    <h3>Поиск...</h3>
    <input type="text"
           className="search-input"
           placeholder="Search..."
           value={search}
           onChange={onUpdateSearchLocal}/>
     </div>
     <div className="search-panel">
     <h3>Добавление...</h3>
      <input type="text"
            className="search-input"
            placeholder="Add..."
            value={city}
            onChange={onUpdateAddLocal}
            />
      <button onClick={searchCity} >Добавить</button>
      </div>
   
      </>
  )
 
}
export default SearchPanel;