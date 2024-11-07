import './App.css'
import { useEffect, useState } from 'react'
import TimerComponent from './components/TimerComponent'

function App() {

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  // first:- side-effect function
  // second:- clean-up function 
  // third:- comma seprated dep list  


  // Variation-1: Runs on every Render
  // useEffect(()=>{
  //   alert("I will run on each render!")
  //   // console.log(count)
  // })

  // Variation-2: Runs only on first render
  // useEffect(()=>{
  //   alert("I will run only on first render!");
  // },[]) 

  // Variation-3: Runs whenever the count is updated
  // useEffect(()=>{
  //   alert("I will run every time whenever the count is updated!");
  // },[count])


  // Variation-4: Multiple Dependencies
  // useEffect(() => {
  //   alert("I will run every time whenever the count/total is updated!");
  // }, [count, total])

  // Variation-5: Clean-up Function
  useEffect(()=>{
    alert("Count is Updated!");
    return ()=>{
      alert("Count is unmounted from the UI!");
    }
  },[count])


  function handleCount() {
    setCount(count => count + 1);
  }
  function handleTotal() {
    setTotal(total => total + 1);
  }


  return (
    <div>
      <button onClick={handleCount}>Update Count</button>
      <p>Count is:{count}</p>
      <br />
      <button onClick={handleTotal}>Update Total</button>
      <p>Total is:{total}</p>

      <TimerComponent/>
    </div>
  )
}

export default App
