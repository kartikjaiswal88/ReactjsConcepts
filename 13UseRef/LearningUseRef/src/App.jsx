import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  let ob = useRef(0);
  let btnRef = useRef();

  function handleClick()
  {
    ob.current += 1;
    console.log("Value of Current is:",ob.current);
    setCount(count + 1);
  }

  useEffect(()=>{
    console.log("Rendering Again......")
  })

  function changeColor(){
    btnRef.current.style.background = "red";
  }

  return (
    <>
     
        {/* <button ref={btnRef} onClick={handleClick}>
          count is {count}
        </button>
        <br />
        <br />
        <button  onClick={changeColor}>Change Color of 1st Button</button> */}
        <StopWatch/>
       
    </>
  )
}

export default App
