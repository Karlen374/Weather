import './exchangeHeader.css'
import {Link } from "react-router-dom";

const ExchangeHeader=()=>{
  return(
  <div className='exchangeHeader'>
  <Link style={{'text-decoration':'none'}} to={`/exchange`}>
      <div className='path'>Convert</div>
  </Link>
  <Link style={{'text-decoration':'none'}}  to={`/exchange/graph`}>
    <div className='path'>Charts</div>
  </Link>
  </div>
  )
}
export default ExchangeHeader;