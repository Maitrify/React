import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
      </div>
       <Outlet />
      {/*a component provided by React Router that serves as a placeholder for rendering nested child routes within a parent route's component */}
    </div>
  )
}

export default Product
