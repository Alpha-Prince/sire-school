
import React from 'react'
import "./Program.css"
import  picture_ from '../../assets/picture_.png'
import  picture_2 from '../../assets/picture_2.png'
import  picture_3 from '../../assets/picture_3.png'
const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={picture_} alt="program 1" />
        <div className='caption'>
          <p>Graduation Degree</p> 
        </div>
      </div>
      <div className='program'>
        <img src={picture_2}  alt="program 2" />
        <div className='caption'>
         <p>Masters Degree</p>   
        </div>
      
      </div>
      <div className='program'>
        <img src={picture_3} alt="program 3" />
        <div className='caption'>
               <p>Post Graduation</p>
        </div>
       
      </div>
    
    </div>
  )
}

export default Program
