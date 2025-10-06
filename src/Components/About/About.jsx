import React from 'react'
import './About.css'
import picture from '../../assets/picture_3.png'
import play from '../../assets/play.jpg'

const About = ({setPlayState}) => {
  return (
    <div className="about" name="about">
    <div className="about-left">
      <img src={picture} alt="" className='about-img'/>
      <img src={play} alt="" className='play-icon' onClick={()=>
        {setPlayState(true)}}/>
</div>
<div className="about-right">
  <h3>ABOUT UNIVERSITY</h3>
  <h2>Lorem ipsum dolor </h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut perferendis similique, rem reiciendis alias dolore recusandae reprehenderit hic dolor necessitatibus excepturi nostrum 
    obcaecati distinctio aliquam omnis officiis voluptatum dolorem?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut perferendis similique, rem reiciendis alias dolore recusandae reprehenderit hic dolor necessitatibus excepturi nostrum 
    obcaecati distinctio aliquam omnis officiis voluptatum dolorem?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut perferendis similique, rem reiciendis alias dolore recusandae reprehenderit hic dolor necessitatibus excepturi nostrum 
    obcaecati distinctio aliquam omnis officiis voluptatum dolorem?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut perferendis similique, rem reiciendis alias dolore recusandae reprehenderit hic dolor necessitatibus excepturi nostrum 
    obcaecati distinctio aliquam omnis officiis voluptatum dolorem?</p>
</div>
    </div>
  )
}

export default About
