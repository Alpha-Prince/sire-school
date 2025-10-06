import React from 'react'
import './Home.css'
import arrow from '../../assets/arrow.jpg'

const Home = () => {
  return (
    <div>
      <div className='home' name='home'>
        <h2>Welcome To University Of  <br />Havard</h2>
        <p>The Best Educating University In The West.  <br />
          Graduating The Best Student In The Past Decade And Beyound</p>
          <button className='btn'>Explore more <img src={arrow} alt="arrow" /></button>
      </div>


    </div>
  )
}

export default Home
