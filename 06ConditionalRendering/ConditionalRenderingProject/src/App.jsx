import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // On the Basis of return statement
  /*
  if(isLoggedIn) return <Logout/>
  return <Login/>
  */

  // On the Basis of Ternary Operator
  // return isLoggedIn ? <Login /> : <Logout />


  // On the Basis of Logical Operator
  // return isLoggedIn && <Logout />

  // On the Basis of if-else statements
  if (isLoggedIn) return <Logout />
  else return <Login />

}

export default App
