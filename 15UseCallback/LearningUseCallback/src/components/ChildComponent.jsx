import React from 'react'
// When we wrap the component in React.memo then it will re-rendered only when it's props changed, otherwise not
// Limitation: It will re-render when the passing function is changed
const ChildComponent = React.memo((props) => {
    console.log("Child Component Re-rendered")
    return (
        <div>
            <h1>This is Child Component</h1>
            <button onClick={props.handleClick}>{props.buttonName}</button>
        </div>
    )
})

export default ChildComponent
