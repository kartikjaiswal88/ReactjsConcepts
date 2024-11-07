import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/about')
  }

  return (
    <div>
        <h1>This is Home Page</h1>
        <button onClick={handleClick}>Move to About Page</button>
    </div>
  )
}

export default Home
