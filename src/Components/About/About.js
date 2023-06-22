import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import aboutItems from "./AboutData"
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt,} from "react-icons/fa";
import { IoLogoWhatsapp,} from "react-icons/io";
import Icons from "../../Icons/Icons"

import "./About.css"
import Contact from '../Contact/Contact';

const About = () => {
  // Split the text into an array of lines
  const items = ['Honeymoon Holidays', 'Romantic Holidays', 'Family Holidays', 'Adventure Tour'];
  return (
    <section id="About">
<Container fluid>
  <Row>
    <Col lg={9}>
    <Card className='leftcard'>
                <Card.Header className="about_heading">
                  About Us 
               </Card.Header>
               
                <Card.Text className="about_cardtext">
                <span style={{fontWeight:"bold"}}>Kumaon Tour Travels, </span>
                {aboutItems[0].UpperText}
                </Card.Text>
                <Card.Img variant="top" src={aboutItems[0].img} className="about_img1" />
                <Card.Body>
                  <Card.Text className="about_cardtext">
                  {aboutItems[0].LowerText}
                 <div>
                 <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p style={{fontWeight:"bold"}}className='about_cardtext' >So, get in touch with us anytime or fill the given form for any inquiry, our associates will get back to you in the shortest time span.</p>
                 </div>

                  </Card.Text>
                </Card.Body>
              </Card>
    </Col>
    {/* Right-Cards */}
   
    <Col lg={3}>
    <Card className='icons_card'>
      <header className='icon_header'> <p>join Us</p></header>
      <Icons />
    </Card>
     
    <Card style={{ width: '18rem', }} className='car_card'>
      <Card.Header>Car Type/Area cover</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
        <header className='gallery_header'>
<h>Gallery</h>
        </header>
      
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../../assests/travelHome.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../../assests/travelHome2.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../../assests/travelHome3.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <Card style={{ width: '18rem' }} className='contact_card_'>
      <Card.Header>Contact Us</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Kumaon Tour Travels, Lalkuan, Nainital, Uttarakhand - 262402, India</ListGroup.Item>
        <ListGroup.Item>
                    <a href="tel:+6494461709" style={{ color: "", textDecoration: "none" }}>
                      <p><FaPhoneAlt className="" style={{ color: "black" }} />+91- 7037923696, 7906241265</p>
                    </a> 
                    </ListGroup.Item>
                   
                    <ListGroup.Item>
        <a href="https://wa.me/message/YVV3N7ZVZMAJH1" style={{ color: "", textDecoration: "none" }}>
        <p> <IoLogoWhatsapp className="contact_icon"style={{ color: "black" }}  /> 7037923696 </p>
          </a>
          </ListGroup.Item>
          
        <ListGroup.Item>
        <a href="mailto:" style={{ color: "", textDecoration: "none" }}>
              <p> <FaEnvelope className="contact_icon"style={{ color: "black" }}  /> Uttrakhand.in@gmail.com </p>
          </a>
          </ListGroup.Item>
             
       
      </ListGroup>
    </Card>
    </Col>
  </Row>
</Container>
        
    </section>

   
  )
}

export default About




