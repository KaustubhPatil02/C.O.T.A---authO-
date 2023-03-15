import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from './images/h6.jpg'
function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])
  return (
    <div id = "About" style={{minHeight:"100vh"}}>
      <div className="sections">
        <div className="contain">
          <div className="content-sections">
            <div className="titles">
              <h1 data-aos="flip-left">About Us</h1>
            </div>
            <div className="contents" data-aos="fade-right">
              <h3 data-aos="flip-right"> C O T A</h3>
              <p data-aos="fade-right">A house is a building in which people live, usually 
              the people belonging to one family. She has moved to a smaller house. ... her parents' 
              house in Warwickshire. Synonyms: home, residence, dwelling [formal, literary], building 
              More Synonyms of house..</p>
              <div className="btn3" data-aos="flip-left">
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="socials">
            </div>
          </div>
          <div className="image-sections"  data-aos="fade-right">
           <img src={img} alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About