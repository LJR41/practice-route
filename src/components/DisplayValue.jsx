import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayValue = () => {
  const { value } = useParams()

  if (isNaN(value) == false) {
    return (
      <div>
        <h1>Here is your number: {value} </h1>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Here is your word: {value}</h1>
      </div>
    )


  }
}


export default DisplayValue