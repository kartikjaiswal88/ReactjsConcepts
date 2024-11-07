import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


// Step1: Creating the Context
const UserContext = createContext();

// Step2: Wrap all the childs inside a provider
// Step3: Pass the value
// Step4: Consume the value inside the consumer


const ThemeContext = createContext();

function App() {
   const [user, setUser] = useState({name:"Kartik"})

  const [theme, setTheme] = useState('light');

  return (
    <div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div id="container" style={{ backgroundColor: theme == 'light' ? "beige" : "black", color: theme == 'light' ? "black" : "white" }}>
            <ChildA />
          </div>

        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

export default App
export {UserContext}
export { ThemeContext }
