import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.count);

  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();


  function handleDecrement() {
    dispatch(decrement());
  }
  function handleIncrement() {
    dispatch(increment());
  }
  function handleReset(){
    dispatch(reset());
  }

  function handleAmountIncrement(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input type="number" value={amount} placeholder='Enter the Amount'  onChange={(e)=>setAmount(e.target.value)}/>
      <br />
      <button onClick={handleAmountIncrement}>Increment By Amount</button>
    </div>
  )
}

export default App
