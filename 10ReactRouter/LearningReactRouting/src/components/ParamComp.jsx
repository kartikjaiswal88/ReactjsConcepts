import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    const { id } = useParams(); // Retrieving the Route Parameter
    return (
        <div>
            <h1>Parameter is:{id}</h1>
        </div>
    )
}

export default ParamComp
