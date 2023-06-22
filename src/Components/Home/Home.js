import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import travelHome from "../../assests/travelHome.jpg"
import Navbar from "../Navbar/Navbar"
const Home = () => {
  return (
    <>
      <section id="Home" >
      {/* <main style={{
          backgroundImage: `url(${travelHome})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}>
          <h1>fnjnfnvjv</h1>
          </main> */}
         
      <Carousel>
        <Carousel.Item interval={500} style={{ width: "100%" }}>
          <img
            className="d-block overlay w-100 img-fluid crouselImg"
            src={require("../../assests/travelHome.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{ width: "100%" }}>
          <img
            className="d-block overlay w-100 img-fluid crouselImg"
            src={require("../../assests/travelHome2.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{ width: "100%" }}>
          <img
            className="d-block overlay w-100 img-fluid crouselImg"
            src={require("../../assests/travelHome3.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default Home