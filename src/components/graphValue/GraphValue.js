import {useState,useEffect} from 'react'
import useConversionServices from '../services/ConversionApi';
import './GraphValue.css'
import {LineChart,Line,ResponsiveContainer,AreaChart,Tooltip,XAxis,YAxis,Area,CartesianGrid} from 'recharts'


const GraphValue=()=>{
  const {getHistoricalRates}=useConversionServices()
  const [data,setData]=useState([])
  const [inputVal,setInputVal]=useState('RUB')
  const [interval,setInterval]=useState()

  useEffect(()=>{
    getHistoricalRates().then(LoadHistory)
  },[])

  const LoadHistory=(res)=>{
    //console.log(Object.keys(res.data).length);
    //const n=Object.keys(res.data).length
    const arr=[];
    let i=0;
    for(let key in res.data){
      arr[i]={
        date:key,
        value:res.data[key].RUB
      }
      i++;
      
    }
    arr.forEach((item)=>console.log(item))

    setData(arr)
    console.log(data)
  }
  return(
    <>
    <div>
    <select value={inputVal} >
        <option value='USD'>USD $</option>
        <option value='RUB'>RUB ₽</option>
        <option value='EUR'>EUR €</option>
        <option value='JPY'>JPY ¥</option>
        <option value='BRL'>BRL R$</option>
        <option value='AMD'>AMD ֏</option>

    </select>
    <select value={interval}>
      <option >Month</option>
      <option >Year</option>
      <option >For all the time</option>
    </select>
    </div>
        <LineChart
  width={800}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="date" />
  <YAxis dataKey="value"/>
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
</LineChart> 
    </>

  )
}
export default GraphValue;