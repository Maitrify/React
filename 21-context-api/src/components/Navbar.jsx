import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react';
import { themeDataContext } from '../context/ThemeContext';

const Navbar = (props) => {
    console.log(props.children[0]);

    const [theme] = useContext(themeDataContext)
    // console.log(theme);
  return (
    <div className={theme}>
      <h2>Maitri</h2>
      {/* <h2>{data}</h2> */}
      {props.children[0]}
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
