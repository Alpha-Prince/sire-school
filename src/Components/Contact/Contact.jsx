import React from 'react'
import './Contact.css'
import phone from '../../assets/phone.jpg'
import location from '../../assets/location.jpg'
import message  from '../../assets/message.jpg'

const Contact = () => {
  return (
    <div className='contact' name='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message} alt="" /></h3>
            <p>Fell free to reach out through our contact form or find our contact
              information below. your feedback, quetions, and suggestions are 
              important to us as we strive to provide exceptional service to our
               university comunity</p>
               <ul>
                <li> <img src={message} alt="" />palpha824@gmail.com</li>
                <li> <img src={phone} alt="" />+233=536=386-223</li>
                <li> <img src={location} alt="" />Ashaiman-Lebanon, Zone 2 <br />
                    Accra-Ghana
                </li>
               </ul>
        </div>
      <div className="contact-col">
        <form >
            <label htmlFor="name">Your name</label>
            <input type="text"  name='name' placeholder='Enter your name' required/>
      
            <label htmlFor="phone">Phone Number</label>
            <input type="text"  name='phone' placeholder='Enter your pmobile number' required/>
      
        <label htmlFor="message">Write your message here</label>
        <textarea name="message" rows="6" required></textarea>

        <button type='submite' className='btn dark-btn'>Submit Now</button>
         </form>
         <span></span>
      </div>
    </div>
  )
}

export default Contact
