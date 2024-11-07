import './App.css'
import UserCard from './components/UserCard'
import CatPic from './assets/CatPic.jpeg'

function App() {


  return (
    <div className='container'>
      
      <UserCard name="Kartik Jaiswal" desc="This is Kartik Jaiswal Description" pic={CatPic} style={{"border-radius":" 10px"}}/>
      <UserCard name="Kartik Lohate" desc="This is Kartik Lohate Description" pic={CatPic} style={{"border-radius":" 10px"}}/>
      <UserCard name="Kartik Sahu" desc="This is Kartik Sahu Description" pic={CatPic} style={{"border-radius":" 10px"}}/>
      <UserCard name="Manish Ahirwar" desc="This is Manish Ahirwar Description" pic={CatPic} style={{"border-radius":" 10px"}}/>
      <UserCard name="Krishnpal Rajput" desc="This is Krishnpal Rajput Description" pic={CatPic} style={{"border-radius":" 10px"}}/>
    </div>
  )
}

export default App



