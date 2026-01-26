import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'



const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Navbar2 />
      
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/*' element={<NotFound/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CourseDetail/>} /> 
        {/* this :id indicate dynamic routing which means courses ke aage slash karke kuch bhi likhege toh ek particular page open hoga instead of 404  */}
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
        </Route>
        {/* ye upar jo hai vo nested routing bolte hai usually route opening closing tag wala nahi hota but when we perform nexted routing we place the child element between opening and closing tag */}
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
