import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval executed")
            setSecond(second=> second + 1)
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    return (
        <div>
            <h1>Second is:{second}</h1>
        </div>
    )
}

export default TimerComponent
