import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full text-2xl font-semibold h-10 w-10 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-shadow-2xs mb-8 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto obcaecati nesciunt repellat cumque atque.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium rounded-full px-6 py-1.5'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium rounded-full px-2 py-1'><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
