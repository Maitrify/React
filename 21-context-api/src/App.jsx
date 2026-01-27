import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button'

const App = () => {

  const [theme,setTheme]= useState('light')


  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is nav bar</h2> 
        <h2>this is nav bar 2 </h2> 
        {/* this will pass as a childrent */}
        </Navbar>
        <Button/>
    </div>
  )
}

export default App
