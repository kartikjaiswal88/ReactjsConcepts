import { useMemo } from 'react';
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Started Expensive Task:");
    for (let i = 0; i < 1000000000; i++) { }
    console.log("Executed Expensive Task:");
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])


  return (
    <div>
      <button onClick={handleClick}>
        count is {count}
      </button>
      <br />
      <br />
      <input type="number" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Enter Number' />
      <p>Value of Double is:{doubleValue}</p>
      {/* <button onClick={changeColor}>Change Color of 1st Button</button> */}
    </div>
  )
}

export default App
