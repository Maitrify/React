import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-cyan-950 justify-between'>
      <h2 className='text-xl font-bold '>MAITRI</h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-medium ' to='/'>Home</Link>
        <Link className='text-xl font-medium ' to='/about'>About</Link>
        <Link className='text-xl font-medium ' to='/product'>Product</Link>
        {/* navlink hame batata hai ki konsa page pe hai ham abhi */}
        <NavLink
        className='text-xl font-medium '
                to="/courses"
                style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>  Courses
            </NavLink>
       
      </div>
      
    </div>
  )
}

export default Navbar
