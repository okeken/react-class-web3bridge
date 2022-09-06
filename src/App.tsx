import React, {Fragment} from 'react';
import './App.css';
import data from "./data.json"


const Products  = ()=> <> 

{data.map((item:any, index)=> (
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

const App = ()=> {
  return (
    <Fragment>  
    <Products /> 
    </Fragment>
  );
}

export default App;
