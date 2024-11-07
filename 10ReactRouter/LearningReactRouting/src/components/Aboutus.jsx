import React from 'react'
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/dashboard')
  }

  return (
    <div>
        <h1>This is About Page</h1>
        <button onClick={handleClick}>Move to DashBoard</button>
    </div>
  )
}

export default Aboutus
