import {Link, NavLink } from "react-router-dom";
import './AppHeader.css'

const AppHeader = () => {

  return (
    <header className="app__header">
    <h1 className="app__title">
        {/* <Link to="/">
            <span>Weather</span> 
        </Link> */}
    </h1>
    <nav className="app__menu">
        <ul>
            <li><NavLink end style={({isActive})=>({color:isActive?'#9f0013':'inherit'})} to="/">Weater</NavLink></li>
            /
            <li><NavLink  style={({isActive})=>({color:isActive?'#9f0013':'inherit'})} to="/exchange">Exchange Rates</NavLink></li>
        </ul>
    </nav>
</header>
  )
}
export default AppHeader;
