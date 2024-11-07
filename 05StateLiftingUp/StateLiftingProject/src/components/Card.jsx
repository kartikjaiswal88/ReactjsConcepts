import React from 'react'

const Card = (props) => {

    return (
        <div>
            <input onChange={(e) => props.setName(e.target.value)} type='text' value={props.name}></input>
            <p>{props.title}::Value is:{props.name}</p>
        </div>
    )
}

export default Card
