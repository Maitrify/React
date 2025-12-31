import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className="parent">
     <Cards user='gauri' age={20} img='https://images.unsplash.com/photo-1766543497004-2fd76e88f605?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
     <Cards user='Maitri' age={24} img='https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
    </div>
  )
}

export default App
