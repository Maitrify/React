import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = (props) => {


  return (
    <div className='pb-20 flex gap-15 items-center h-[86.5vh]  px-18'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
