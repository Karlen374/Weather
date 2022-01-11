import './ExchangeValue.css'
import useConversionServices from '../services/ConversionApi';

const ExchangeValue=()=>{

const {getConvertValue}=useConversionServices();

const request=()=>{
  getConvertValue('USD').then(Load)
}

const Load=(res)=>{
  console.log(res)
}
  return(
    <>
    <button onClick={request}>Check</button>
    <div>New Page</div>
    </>
  )
}

export default ExchangeValue;