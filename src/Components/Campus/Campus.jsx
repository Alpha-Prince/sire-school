import React from 'react'
import './Campus.css'
import pic1 from '../../assets/cam1.png'
import pic2 from '../../assets/cam2.png'
import pic3 from '../../assets/cam3.png'
import pic4 from '../../assets/cam4.png'
import arrow from '../../assets/arrow.jpg'
const Campus = () => {
  return (
    <div className='campus' name="campus">
      <div className="gallery">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={arrow} alt="arrow" /></button>
    </div>
  )
}

export default Campus
