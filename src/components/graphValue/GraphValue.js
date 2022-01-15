import {useState,useEffect} from 'react'
import useConversionServices from '../services/ConversionApi';
import './GraphValue.css'

const GraphValue=()=>{
  const {getHistoricalRates}=useConversionServices()


  useEffect(()=>{
    getHistoricalRates().then(LoadHistory)
  },[])
  const LoadHistory=(res)=>{
    //console.log(Object.keys(res.data).length);
    //const n=Object.keys(res.data).length
    const arr=[];
    let i=0;
    for(let key in res.data){
      arr[i]=res.data[key]
      i++;
      
    }
    arr.forEach((item)=>console.log(item.EUR))
    //console.log(arr[1].AED)
  }
  return(
    
    <div className='graphBlock'>
      <h2>Graph</h2>
    </div>
    
  )
}
export default GraphValue;