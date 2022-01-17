import {useState,useEffect} from 'react'
import useConversionServices from '../services/ConversionApi';
import './GraphValue.css'
import {ResponsiveContainer,AreaChart,Tooltip,XAxis,YAxis,Area,CartesianGrid} from 'recharts'
import Spinner from 'react-bootstrap/Spinner'

const GraphValue=()=>{
  const {getHistoricalRates,getConvertValue}=useConversionServices()
  const [data,setData]=useState([])
  const [currency,setCurrency]=useState([])
  const [inputVal,setInputVal]=useState('RUB')
  const [period,setPeriod]=useState('2021-01-17')
  const [convertVal, setConvertVal] = useState('USD')
  const [spinner,setSpinner]=useState(false)
  

  const request=()=>{
    setSpinner(true)
    getHistoricalRates(convertVal,period).then(LoadHistory)
    getConvertValue(convertVal).then(LoadCurrency)
  }
  
  useEffect(()=>{
   request()
  },[inputVal,period,convertVal])

  const LoadHistory=(res)=>{
    const arr=[];
    let i=0;
    for(let key in res.data){
      arr[i]={
        date:key,
        value:res.data[key][inputVal]
      }
      i++;
    }
    setData(arr)
    setSpinner(false)
  }
  const LoadCurrency=(res)=>{
    const coefficient=res.data[inputVal]
    setCurrency(coefficient);
    console.log(`1 ${inputVal}=${coefficient} ${convertVal}`)
  }

  const changeInputValue=(e)=>{
    setInputVal(e.target.value)
  }

  const changeConvertValue = (e) => {
    setConvertVal(e.target.value)
  }

  const changePeriod=(e)=>{
    setPeriod(e.target.value)
  }

  const Content=spinner?<div className='SpinnerBlock'><Spinner animation="grow" /> | <Spinner animation="grow" /> | <Spinner animation="grow" /></div>:<View data={data}/>;
  const Convert=spinner?<div className='SpinnerBlock'><Spinner animation="border" size="sm" /></div>:<div className='valueInfo'>1 {convertVal}={currency} {inputVal} </div>;
  return(
    <>
    <h2>Charts</h2>
    {Convert}
    <div className='graphBlock'>
     <label> From
     <select value={convertVal} onChange={changeConvertValue}>
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>
        </select>
    </label>

     <label>
    <select value={period} onChange={changePeriod}>
      <option value='2021-12-17'>Month</option>
      <option value='2021-01-17'>Year</option>
      <option value='2017-01-01'>Max</option>
    </select>  
    </label>

    <label>To
        <select value={inputVal} onChange={changeInputValue}>
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>
        </select>
    </label>
    </div>
        {Content}

    </>

  )
}
const View=({data})=>{
  return(
    <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}
export default GraphValue;