import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayHello = () => {
    const { text, background } = useParams()
    return (
        <div>
            <h1 style={{color: text, backgroundColor: background}}>Hello</h1>
        </div>
    )
}

export default DisplayHello