import './ExchangeValue.css'
import Spinner from 'react-bootstrap/Spinner'
import useConversionServices from '../services/ConversionApi';
import { useState ,useEffect} from 'react';

const ExchangeValue=()=>{

const [currency,setCurrency]=useState('');
const [updateCurrency,setUpdateCurrency]=useState('');
const {getConvertValue}=useConversionServices();
const [inputVal,setInputVal]=useState('USD');
const [convertVal,setConvertVal]=useState('RUB')
const [spinner,setSpinner]=useState(false);
const [result,setResult]=useState(false)

const request=()=>{
  setSpinner(true);
  console.log('request')
  getConvertValue(inputVal).then(Load)
}

 useEffect(()=>{
  request();
 },[convertVal,inputVal])

 
const changeInputVal=(e)=>{
  setInputVal(e.target.value)
  
  
}
const changeConvertVal=(e)=>{
  setConvertVal(e.target.value)
  
}
const onUpdateLocal=(e)=>{
  const currency=e.target.value;
  setCurrency(currency);
  setResult(false);
}
const Load=(res)=>{
  //console.log(res.data)
  const coefficient=res.data[convertVal]
  setUpdateCurrency(currency*coefficient);
  setSpinner(false)
  setResult(true)
}
const spinnerView=spinner?  <Spinner animation="border" size='sm' variant="dark" />:null;
const content=result?<Result currency={currency} inputVal={inputVal} updateCurrency={updateCurrency} convertVal={convertVal}/>:null;
  return(
    <div className='convert'>
    <div className='convertBlock'>
      <label>From
    <select value={inputVal} onChange={changeInputVal}>
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>
        
    </select>
    </label>
    <label>Amount
    <input type="number"
            className="convert-input"
            placeholder="..."
            value={currency}
            onChange={onUpdateLocal}
            />
    </label>   
            <label> To
     <select value={convertVal} onChange={changeConvertVal}>
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>
    </select>
    </label>
    
    </div>
    <div className='convertResult'>
      <button onClick={request}> Convert {spinnerView} </button>
      {content}
    </div>
    </div>
  )
}

const Result=({currency,inputVal,updateCurrency,convertVal})=>{
  return(
    <div>{currency} {inputVal} is {updateCurrency} {convertVal}</div> 
  )
}
export default ExchangeValue;