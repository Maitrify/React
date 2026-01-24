import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const[userData,setUserdata]= useState([]);
  const[index, setIndex] = useState(1);
  
  const getData = async () => {
    //axios.post basically says where the api value should be posed and what
    //axios.get just collect the value from api
    //axios.patch updated the value , this all sent req to perform specific task
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserdata(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }


  return (
    <div className='bg-black overflow-auto p-5 h-screen text-white'>
      {/* <button  onClick={getData}
      className='  px-5 py-2 mb-3 rounded active:scale-95 text-white bg-green-600'> GetData</button> */}
      <h1>{index}</h1>
      <div className='flex h-[82%] flex-wrap gap-2'>
        {printUserData }</div>
      
      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
        style={{opacity:index == 1 ?0.5:1}}
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm active:scale-95 cursor-pointer '
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserdata([])
          }
        }}
        >
          prev</button>
          <h4>Page {index}</h4>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm active:scale-95 cursor-pointer'
        onClick={()=>{
           setIndex(index+1)
           setUserdata([])
        }}
        >
          next</button>
      </div>
    </div>
  )
}

export default App
