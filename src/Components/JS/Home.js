import React,{useEffect,useState} from 'react'
import '../CSS/Home.css'
import { NavLink } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Footer from './Footer'

import Infoma from './infom'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import {Link} from 'react-scroll'
import Tooltip from '@mui/material/Tooltip';
    // import Navbar from './Navbar.js'
import hhm from './images/hhm.png';
    
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [top, settop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    settop(false);
  };

  const handleOpen = () => {
    settop(true);
  };
  return (
    <div id="bg">


     {/* <Navbar /> */}
    <div id="Home" style={{width:"100%"}}>
    {/* <div class="custom-shape-divider-top-1671606956">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> */}
<div class="custom-shape-divider-bottom-1671626083">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      <header className='head' style={{minHeight:"99vh"}}>
        <div class="h-text">
          
          <h2 style={{fontWeight:"500"}}></h2>
          <h1 data-aos="fade-right">COTA</h1>
          {/* <p data-aos="fade-left" style={{letterSpacing:"2px"}}>First Platform to connect </p> */}
          <p >Colonizing Online Till Anywhere</p>
          <p >Directly</p>
          {/* <h3 style={{ textDecoration: "none", listStyle: "none" }} data-aos="flip-right"><Link to="About" onClick={() => setIsOpen(!isOpen)} id="order">Learn More</Link></h3> */}
        </div>
        <div className="image">
          <img src={hhm} data-aos="fade-left" alt="" srcset="" width="100%" height="100%"/>
        </div>
      </header>
      <Link to='Navbar'>
 <Tooltip open={top} onClose={handleClose} onOpen={handleOpen} title="top">
<Box sx={{ '& > :not(style)': { m: 1 } }} style={{position:'fixed',right:'10px',bottom:'20px'}} className="tops">
      <Fab variant="extended" size="small" color="primary" aria-label="Top">
        <NavigationIcon />
      </Fab>
    </Box>
    </Tooltip>
    </Link>
    </div>
    <Service/>
    <Infoma/>
    <Contact/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Home