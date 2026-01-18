import React, { useEffect, useState } from 'react'

//use effect is use when we have to show particular data at a time instead of showing all the data at one time

const App = () => {
  const [a,setA] = useState(0)
  const [b,setB] = useState(0)

  function aChanging(){
    console.log('A ki value is changing');
  }
  function bChanging(){
    console.log('B ki value is changing');
  }

  useEffect(function(){
    bChanging()
  },[])

  useEffect(function(){
    aChanging()
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>

      <button onClick={()=>{
        setB(b+1)
      }}>Change B</button>
      
    </div>
  )
}

export default App
