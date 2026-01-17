import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const[data,setData] = useState([])

   
  const getD =async ()=>{
    const responses = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    setData(responses.data)
  }
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   console.log(response);
  //   const data = await response.json()
  //   console.log(data);
  // }


  return (
    <div>
      {/* <button onClick={getData}> get data</button> */}
      <button onClick={getD}> get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello {elem.name} {idx}</h3>
        })}
      </div>
      
    </div>
  )
}

export default App
