import React from 'react'
import kartikPic from '../assets/CatPic.jpeg'
import './UserCard.css'


const UserCard = (props) => {
  return (
    <div className='userContainer' style={props.style}>
      <h2 id='userTitle'>{props.name}</h2>
      <img id='userImage' src={props.pic} alt={props.name} />
      <p id='userDesc'>{props.desc}</p>
    </div>
  )
}



export default UserCard
