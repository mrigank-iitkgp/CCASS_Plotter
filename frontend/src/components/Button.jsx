import React from 'react'

const Button = ({bgColor , color , size , text , borderRadius , postRequest}) => {
  return (
    <button
    type="button"
    style={{backgroundColor: bgColor , color , borderRadius}}
    className={`text-${size} p-3 hove:drop-shadow-xl`}
    onClick={postRequest}
    >
      {text}
    </button>
  )
}

export default Button