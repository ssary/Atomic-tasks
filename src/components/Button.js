import React from 'react'

const Button = ({color, text, onclick}) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor:color}} onClick={onclick}>
        {text}
      </button>
    </div>
  )
}



export default Button
