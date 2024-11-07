import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function Detail() {
  return (
    <div>
      <h1>Aspiring Data Engineer</h1>
      <p>Learning Various Technologies</p>
      <p>Completing the Reactjs for fronted of the Projects</p>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count=> count + 1);
  }

  return (
    <div>
      <Card name="Kartik Jaiswal">
        <h1>Aspiring Data Engineer</h1>
        <p>Learning Various Technologies</p>
        <p>Completing the Reactjs for fronted of the Projects</p>
      </Card>
      <Card>
        <Detail/>
      </Card>
      <Card>
        <h1>Hello Jiii</h1>
      </Card>
      <Card children="I am a Children"/>

      <Button incrementCount={handleClick} text="Click Me">
            <p>Count is:{count}</p>
        </Button>/

    </div>
  )
}

export default App
