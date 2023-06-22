import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import "./Navbar.css"
import Icons from "../../Icons/Icons"
import travelLogo from "../../assests/travelLogo.png"


function NavBar() {
  return (
    <>
      <Navbar fixed="top" className='Navbar' expand="lg" 
      style={{
          backgroundImage: `url(${''})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height:'auto'
          }} >
        
          <Navbar.Brand className="NavbarBrand" href="#">
            <img className="logo_img img-fluid" src={travelLogo} />
            <p className='brandName'>Uttrakhand-Travels</p>
          </Navbar.Brand>
          <Navbar.Toggle className ="toggle"aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav_links"
              style={{ height: 'auto', width: "auto" }}
              navbarScroll
            >
              <Nav.Link className='links' href="#Home">Home</Nav.Link>
              <Nav.Link className='links' href="#About">About</Nav.Link>
              <Nav.Link className='links' href="#Service">Services</Nav.Link>
              <Nav.Link className='links' href="#Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex search_nav" >
              <Icons />
              {/* <button className='nav_btn'>Join tech hub </button> */}
            </Form>
          </Navbar.Collapse>
       
      </Navbar>
      
    </>
  );
}

export default NavBar;  