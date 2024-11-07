import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent'
import { useCallback } from 'react';

// UseMemo: Avoid function re-run
// UseCallback: Avoid function re-creation  

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [])

  return (
    <div>
      {/* <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>
      <div>
        <ChildComponent buttonName="Click Me" handleClick={handleClick} />
      </div> */}

      <ExpensiveComponent/>
    </div>
  )
}

export default App
