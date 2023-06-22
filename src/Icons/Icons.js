import React from 'react'
import "./Icons.css"
import { faSquareInstagram, faSquareWhatsapp, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import youtubeicon from "../assests/YouTubeIcon.png"
import whatsappicon from "../assests/whatsappIcon.png"

const Icons = () => {
  return (

    <div className='social_container'>

      <a href="https://www.facebook.com/profile.php?id=100084463219381&mibextid=LQQJ4d" className="facebook social">
        <FaFacebookF />
      </a>

      <a href="https://instagram.com/timely_proxyy?igshid=MWI4MTIyMDE="
        className="instagram social">
        <FiInstagram />
      </a>

      <a href="https://wa.me/message/YVV3N7ZVZMAJH1"
        className="whatsapp social">
       <img src={whatsappicon} className='whatsapp social'/>
      </a>


      <a href="https://www.linkedin.com/company/timelyproxyy/" className='youtube social'>
       <img src={youtubeicon} className='youtube social'/>
      </a>


    </div>
  )
}

export default Icons
