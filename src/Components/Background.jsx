import React from 'react'
import video1 from '../assets/physio.mp4'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import '../Style/Background.css'

const Background = ({count,play}) => {
    if(play){
  return (
   <video className='background' autoPlay loop muted>
    <source src={video1} type='video/mp4'/>
   </video>
  )
    }
    else if(count===0) {
        return <img src={image1} className='background' alt=''/>
    }
    else if (count===1) {
        return <img src={image2} className='background' alt=''/>
    }
    else if (count===2) {
        return <img src={image3} className='background' alt=''/>
    }

}

export default Background
