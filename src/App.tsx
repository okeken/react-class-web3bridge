import {Fragment, useEffect, useState} from 'react';
import './App.css';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
// import Products from './components/Products';
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
  const [hasError, setHasError] = useState(false)
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
    }
    catch(e:any){
      setHasError(e)
    }
    finally{
      setLoading(false)
    }
}

useEffect(()=>{
  fetchData()
console.log("hello !!!!")
},[info] )

const _data = ""
const _loading=""
const _error = ""
  return (
    <> 
    <h1 className='text-5xl '>
      {info}
      </h1>
      <button className='border p-3 inline-block mt-6' onClick={handleChange}>
        change value
        </button>
{data.map((item, index)=> (
    <Fragment key={index} > 
  <div className='text-center border border-blue-300 my-6 p-3 rounded-md max-w-sm mx-auto'>
    <img src={item.image} alt={item.title} className="block mx-auto w-36 h-36 mb-1" />
  {item.title}
  
  </div>
  
  </Fragment> 
  
  )


) 
}

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
