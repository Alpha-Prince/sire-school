import React, {useRef} from 'react'
import './Testimonials.css'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import back from '../../assets/back.jpg'
import forward from '../../assets/foward.jpg'

const Testimonials = () => {

const slider = useRef();
let tx = 0;

const slideFoward = ()=>{
  if(tx > - 50){
    tx-=25;
  }
  slider.current.style.transform = ` translateX(${tx}%)`
}
const slideBackward = ()=>{
if(tx < 0){
    tx+=25;
}
slider.current.style.transform = ` translateX(${tx}%)`

}

  return (
    <div className='testimonials' name='testimonials'>
      <img src={back} alt="back arrow" className='back-btn'  onClick={slideBackward}/>
      <img src={forward} alt="foward arrow" className='next-btn'onClick={slideFoward}/>
      <div className="slider">
        <ul ref={slider}>
            <li >
                <div className="slide"> 
                 <div className='user-info'>
                    <img src={user1} alt="" />
                    <div>
                        <h3>William Johnson</h3>
                        <span>Edusity, USA</span>
                    </div>   
                    </div>   
                    <p>Choosing to pursue my degree at Eduity was one of the
                       best decision I've ever made. The surpportive
                        community, state-of-thr-art facilities, and commitment
                       to acadamic excelience hane truly exceeded my expectation

                    </p>
                </div>                  
           </li>
           <li >
            <div className="slide">
                  <div className='user-info'>
                    <img src={user2} alt="" />
                    <div>
                        <h3>Dorothy Heirs</h3>
                        <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Eduity was one of the
                       best decision I've ever made. The surpportive
                        community, state-of-thr-art facilities, and commitment
                       to acadamic excelience hane truly exceeded my expectation

                    </p>
                </div>  
           </li>
           <li > 
             <div className="slide">
                 <div className='user-info'>
                    <img src={user3} alt="" />
                    <div>
                        <h3>Mark Godsin</h3>
                        <span>Edusity, USA</span>
                    </div> 
                      </div>   
                    <p>Choosing to pursue my degree at Eduity was one of the
                       best decision I've ever made. The surpportive
                        community, state-of-thr-art facilities, and commitment
                       to acadamic excelience hane truly exceeded my expectation

                    </p>
                </div>
           </li>
            <li >
            <div className="slide">
                <div className='user-info'>
                    <img src={user4} alt="" />
                    <div>
                        <h3>Edwin Marklin</h3>
                        <span>Edusity, USA</span>
                    </div>
                    </div>
                    <p>Choosing to pursue my degree at Eduity was one of the
                       best decision I've ever made. The surpportive
                        community, state-of-thr-art facilities, and commitment
                       to acadamic excelience hane truly exceeded my expectation

                    </p>
                </div>  
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
