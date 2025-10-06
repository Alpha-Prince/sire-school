import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Video from './Components/VideoPlayer/VideoPlayer.jsx'
import { useState } from 'react'
function App (){

const [playState, setPlayState] = useState(false);


 return (
   <div>
   <Navbar/>
   <Home/>
   <div  className='container'>
   <Title subTitle="Our PROGRAM" title="What We Offer"/>
  <Program/>
  <About setPlayState={setPlayState}/>
  <Title subTitle="GALLERY" title="Campus Photos"/>
 <Campus/>
 <Title subTitle="TESTIMONIALS" title="What Students Say"/>
 <Testimonials/>
 <Title subTitle="CONTACT US" title="Get In Touch"/>
<Contact/>
<Footer/>
      </div>
<Video playState={playState} setPlayState={setPlayState}/>
  </div>
 )

}

export default App


