import {Fragment, useEffect, useState} from 'react';
import './App.css';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import ProductsCom from './components/Products';
// import data from "./data.json"
import axios from "axios"


type Count = {
  rate:number
    count:number
}
type Data = {
  image:string
  id:number
  title:string
  price:number
  description:string
  rating:Count
}
const defaultData:Data[] =[]
const defaultValue = 120

const Products  = ()=>{
  const [info, setInfo] = useState<number>(defaultValue)
  let [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Data[]>(defaultData)
  

const handleChange = ()=>{
  setInfo((prev)=> prev + 20 )
}
const apiUrl = "https://fakestoreapi.com/"
const fetchData = async ()=>{
    try{
      const {data:apiData} = await axios.get(`${apiUrl}products`)
      setData(apiData)
      console.log(data)
      // throw "Error happened";
    }
    catch(e:any){
      setHasError(e.message)
      console.log(e.message,'error')
      
    }
    finally{
      setLoading(false)
    }
}


useEffect(()=>{
  let mounted = true
  if(!mounted)return;
  fetchData()
  return  ()=> {
    mounted = false

  };
},[info] )

const _data = <> <ProductsCom data={data} /></>

const _loading=loading ? <Loader /> : ""
const _error = hasError  ? <ErrorComponent text={hasError} retry={fetchData} />: ""
console.log(hasError, "hasErrpr")
  return (
    <> 
        {_data}
        {_error}
        {_loading}
</>
  )
}



const App = ()=> {
  return (
    <Fragment>  
    <Products /> 
    </Fragment>
  );
}

export default App;
