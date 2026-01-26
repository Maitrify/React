import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const navigate = useNavigate();
  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button onClick={()=>{
        navigate('/')
      }} className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Return to Home page</button>
      <button onClick={()=>{
        navigate(-1)//this act as history aagar 'home' se 'about' pe aage or navigate(-1) use kiya that means ki vo back dabane pe vapas vo home pe ja sakte hai 
      }} className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Back</button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Next</button>
      
      
    </div>
  )
}

export default Navbar2
