import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext';

const Nav2 = (props) => {

   const [theme,setTheme]= useContext(themeDataContext)

   console.log(theme);
  return (
    <div className='nav2'>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Services</h4>
          <h5>{theme}</h5>
         <h4>{props.theme}</h4> 
    </div>
  )
}

export default Nav2
