import React from 'react'
import "./Video.css"

function Video(thumbnail, title) {
  return (
    <div className='videoBox'>
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
    </div>
  )
}

export default Video