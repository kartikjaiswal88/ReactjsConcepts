import React from 'react'

const Button = ({incrementCount,children,text}) => {
  return (
    <div>
    <button onClick={incrementCount}>
       {text}
    </button>
    {children}
    </div>
  )
}

export default Button
