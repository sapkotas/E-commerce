import React from 'react'
import './Front.css'  
import hand_icon from "../Assests/hand_icon.png"
import arrow_icon from "../Assests/arrow.png"
import hero_image from "../Assests/hero_image.png"
const Front = () => {
  return (
    <>
<div className='front'>
<div className='front-left'>
    <h2>new arrivals only</h2>
      <div>
        <div className="front-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt=''/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="front-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt=''/>
      </div>
</div>
<div className='front-right'>
 <img src ={hero_image} style={{width:"500px"}} alt=""/>
</div>
</div>
</>
  )
}

export default Front