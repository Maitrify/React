import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams();
    console.log(params); //basically parameters deta hai jo ham url mai likhte hai for example: isme courses ke baad kuch bhi likhoge toh coursedetail page khulega or jo likha hai vo hame as a parameter mil jayega object ke form mai

  return (
    <div>
      <h1>{params.id} Course Detail Page</h1>
      {/* url mai course ke baad jo likha hai vo yaha bhi dikha sakte hai also isme index.css mai text-transform capatalize kiya hai jisse small mai bhi likho toh bhi first letter capital ho jayega*/}
    </div>
  )
}

export default CourseDetail
