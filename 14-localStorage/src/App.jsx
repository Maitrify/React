import React from 'react'

const App = () => {

  // localStorage.clear()   to clear local storage
  // this key value storage remain application-> localStorage even though we refresh or close the browser

  localStorage.setItem('user','Maitri')
  const user = localStorage.getItem('user')
  localStorage.removeItem('user')

  console.log(user)
  
  const users = {
    username : 'maitri',
    age:20,
    city:'bhopal'
  }

  localStorage.setItem('users',JSON.stringify(users))
 
  const userss = localStorage.getItem('users')
  const userobj = JSON.parse(localStorage.getItem('users')) //TO CONVER IT INTO OBJECT 
  
  console.log(typeof(userss))



  return (
    <div>
      heelooo
    </div>
  )
}

export default App
