import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Maitri</h3>
        <div> 
            {/* to avoid page reloading we use link tag */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          
        </div>
      </div>
  )
}

export default Navbar
