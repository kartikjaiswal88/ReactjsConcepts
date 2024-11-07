import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setState] = useState(0);


    return (
        <div className='counterContainer'>
            <p id='para'>You have clicked {count} times</p>
            <button id='increButton' onClick={() => { setState(count + 1) }}>
                Increment
            </button>
        </div>
    )
}

export default Counter
