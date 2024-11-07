import React, { useState, useRef } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    let timerRef = useRef(null);

    function startTimer() {
        timerRef.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
    }
    function stopTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null;
    }
    function resetTimer() {
        stopTimer();
        setTime(0);
    }
    return (
        <div>
            <h1>Stop Watch:{time} Seconds</h1>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
        </div>
    )
}

export default StopWatch
