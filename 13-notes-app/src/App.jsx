import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  
  const [title ,setTitle] = useState('') 
  const [details ,setDetails] = useState('') 

  const [task ,setTask] = useState([]) 

  const submitHandler= (e) => {
  e.preventDefault()
  
  const copyTask = [...task];

  copyTask.push({title,details})
  setTask(copyTask)
  console.log(task);
  
  setTitle(" ")
  setDetails(" ")
  }

  const deleteNote =(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black  text-white '>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 gap-4 item-start flex-col '>
         <h1 className='text-3xl font-bold'>Add Notes</h1>
      
      {/* PEHLA INPUT FOR HEADING */}
      <input 
      type="text"
      className='px-5 py-2 border-2   w-full outline-none rounded' 
      placeholder='Enter Task Heading' 
      value={title}
      onChange={(e)=>{
        // console.log(e.target.value); isse sirf console pe value dikhegi
        setTitle(e.target.value)
      }} 
      />
      
      {/* DETAILED WALA INPUT */}
      <textarea
      type="text" 
      className='px-5 py-2 border-2 h-30 rounded flex items-start flex-row outline-none' 
      placeholder='Write Details' 
      value={details}
      onChange={(e)=>{
        setDetails(e.target.value)
      }} />

      <button className='bg-white active:scale-98 active:bg-gray-400  text-black px-5 py-2 rounded'>Add Note</button>

      </form>
      <div className='  lg:w-1/2 px-10 py-5 lg:border-l-2 '>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
      {task.map(function(elem,idx){
        return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-42 rounded-2xl text-black pt-6 pb-3.5 px-4 bg-[url('https://cbx-prod.b-cdn.net/COLOURBOX57016095.jpg?width=800&height=800&quality=70')] bg-cover">
          <div>
            <h2 className='absolute  bg-blue-300 p-0.5 rounded-full text-xs top-2 right-2 border-1 border-gray-800'><X size={18} color="#050505" strokeWidth={2.75} /></h2>
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.details}</p>
          </div>
          <button onClick={()=>{
             deleteNote(idx)
          }} className=' cursor-pointer active:scale-95 w-full bg-blue-400 border-gray-700  font-medium border-1 text-white rounded'>Delete</button>
        </div>
      })}

        </div>
      </div>
    </div>
  )
}

export default App
