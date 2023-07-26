import React from 'react'
import './Trailer.css'
import video from '../../../videos/video-1.mp4'

function Trailer() {
  return (
    <div>
         <video src = {video} autoPlay loop muted ></video>
    </div>
  )
}

export default Trailer