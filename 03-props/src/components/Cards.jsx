import React from 'react'

const Cards = (props) => {
  console.log(props.user,props.age)
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="profile" />
        <h2>{props.user} patel, </h2>
        <p>Lorem ipsum dolor sit amet consectetur  ducimus!</p>
        <button> View Profile</button>
      </div>
      
    </div>
  )
}


 export default Cards

