import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>DocDetailed</h1>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      <p>I am inside parnent component and value of name is:{name}</p>
    </div>
  )
}

export default App
