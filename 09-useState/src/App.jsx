import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState(0);

  function IncValue(){
    setValue(value+1)
  }
  function DecValue(){
    setValue(value-1)
  }

  function plus5(){
    setValue(value+5)
  }


  
   
    
  
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={DecValue}>Decrease</button>
      <button onClick={IncValue}>increase</button>
      <button onClick={plus5}>jump+5</button>
      
      
    </div>
  )
}

export default App
