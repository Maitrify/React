import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  //child ke andar changes kiye vo parents mai dikhega its like reverse ase flow parents to child jata hai but isme niche se upar jayega
  const [theme,setTheme]= useState('light')
  return (
    <div>
      <h1>Theme is {theme}</h1>
    <Navbar theme={theme} setTheme={setTheme}/>      
    </div>
  )
}

export default App
