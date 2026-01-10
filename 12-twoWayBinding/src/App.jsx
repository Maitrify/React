import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("")
  const sumbitHandler = (e) =>{
    e.preventDefault()
    console.log('form submitted by',title);
    setTitle(" ")
  }
   // how this works : isme aagar hame input mai value deni ho toh directly nahi de sakte ham kaan ulta pakdege that means using useState ham ham title ki value ko input ki value me assign karege or changes setTitle se karege using onclick funtions afetr that jo setTile mai chnages aaye vo chnages title mai reflect hoge jo hame input mai dikhege
  return (
    <div>
      <form onSubmit={(e) =>{
        sumbitHandler(e)
      }}>
        <input type="text" 
        placeholder='enter your name' 
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value);
        }} />
       <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App