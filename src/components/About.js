import { Link } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'
const About = () => {
  return (
    <div>
        <h4>Hey it's sary, passionate about programming</h4>
        <h4 style={{color:'red'}}>Email: sarynasser1@gmail.com</h4>
        <h4 style={{color:'green'}}>Phone: 20+1112405524</h4>
        <FaArrowLeft icon="fa-solid fa-arrow-left fa-xl" />
        <Link to='/' style={{textDecorationLine:'none',fontSize:'20px'}} className>Return to home</Link>
    </div>
  )
}

export default About
