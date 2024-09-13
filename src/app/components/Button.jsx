import React from 'react'

function Button({data}) {
  return (
    <div className='container'>
      <button className='button-custom'>
{data}
      </button>
    </div>
  )
}

export default Button
