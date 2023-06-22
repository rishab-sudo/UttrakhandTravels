import React from 'react';
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "../src/Components/Navbar/Navbar"
import Home from "../src/Components/Home/Home"
import About from "../src/Components/About/About"
import Service from "../src/Components/Service/Service"
import Contact from "../src/Components/Contact/Contact"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <div className='App'>
      <Navbar/>
<Home/>
<About/>
<Service/>
<Contact/>
     
    </div>
  );
}

export default App;
{/* <Router>
<Navbar/>
<Routes>
<Route exact path ="/Home" element={ <Home/>}/>
<Route exact path ="/About" element={ <About/>}/>
</Routes>
</Router> */}
