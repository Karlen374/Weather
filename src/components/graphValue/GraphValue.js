import {useState,useEffect} from 'react'
import useConversionServices from '../services/ConversionApi';
import './GraphValue.css'
import {LineChart,Line,ResponsiveContainer,AreaChart,Tooltip,XAxis,YAxis,Area,CartesianGrid} from 'recharts'


const GraphValue=()=>{
  const {getHistoricalRates}=useConversionServices()
  const [data,setData]=useState([])
  const [inputVal,setInputVal]=useState()
  const [period,setPeriod]=useState()
  const [convertVal, setConvertVal] = useState()
  
  useEffect(()=>{
    getHistoricalRates(inputVal,period).then(LoadHistory)
    console.log(period)
  },[inputVal,period,convertVal])

  const LoadHistory=(res)=>{
    //console.log(Object.keys(res.data).length);
    //const n=Object.keys(res.data).length
    const arr=[];
    let i=0;
    for(let key in res.data){
      arr[i]={
        date:key,
        value:res.data[key][inputVal]
      }
      i++;
      
    }
    arr.forEach((item)=>console.log(item))

    setData(arr)
    console.log(data)
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
  return(
    <>
    <h2>Charts</h2>
    <div className='graphBlock'>
     <label> From
    <select value={inputVal} onChange={changeInputValue}>
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
    <select value={convertVal} onChange={changeConvertValue}>
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>
    </select>
    </label>
    </div>
        
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
    </>

  )
}
export default GraphValue;