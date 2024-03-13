import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='loader'>
      <div className='container'>
        <p>Loading</p>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    </div>
  )
}

export default Loader
