import React, { useState,useEffect } from 'react'
import '../CSS/Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Contact() { 
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState();
  const[message,setmessage]=useState("");
 
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <React.Fragment>
   <div className="contact-section" id='Contact'>

<h1 data-aos="flip-left" style={{color:"#000"}}>Feedback</h1>
<form className="contact-form" action="index.html" method="post">
  <input type="text" value={name}  style={{color:"#fff"}} onChange={(e) => setname(e.target.value)} className="contact-form-text" placeholder="Your name"  data-aos="fade-right"/>
  <input type="email" value={email}   onChange={(e) => setemail(e.target.value)} className="contact-form-text" placeholder="Your email" style={{color:"#fff"}} data-aos="fade-left"/>
  <input type="text" value={phone}   onChange={(e) => setphone(e.target.value)} className="contact-form-text" placeholder="Your phone" style={{color:"#fff"}} data-aos="fade-right"/>
  <textarea className="contact-form-text" value={message}  onChange={(e) => setmessage(e.target.value)}placeholder="Your message" style={{color:"#fff"}} data-aos="fade-left"></textarea>
  <input type="submit" className="contact-form-btn" value="Send" data-aos="flip-right" />
</form>
</div>   
</React.Fragment>
  )
}

export default Contact