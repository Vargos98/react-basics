import React from 'react'

const Button = ({text,color}) => {
  return (
    <div className={`px-5 py-2 w-32 h-10 ${color}`}>{text}</div>
  )
}

export default Button