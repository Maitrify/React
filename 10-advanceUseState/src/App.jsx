import React, { useState } from 'react'

const App = () => {

    const [num,setnum] = useState({user:'sarthak', age:20})
    const [num1,setnum1] = useState([10,20,30])

    const btnClicked = () =>{
    // const newNum = {...num};
    // newNum.user = 'aman' 
    // newNum.age = 29
    // setnum(newNum) 
    setnum(prev=>({...prev,age:50}))
  
  }


    const btnClicked1 = () =>{
    const newNum1 = [...num1];
    newNum1.push(99) 
    setnum1(newNum1)   


    } 
  return (
    <div>
        {/* <h1>{num.user},{num.age}</h1> */}
        <h1>{num.age}</h1>
        <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
