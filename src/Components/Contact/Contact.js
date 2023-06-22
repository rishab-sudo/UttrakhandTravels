import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Contact.css"
import swal from 'sweetalert';


const Contact = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    phoneNo: "",
    collegeName: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { fname, email, phoneNo, collegeName, message } = userData;

    if (fname && email && phoneNo && collegeName && message) {
      const res = fetch(
        "https://proxyycontact-db-7ede6-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            fname,
            email,
            phoneNo,
            collegeName,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          fname: "",
          email: "",
          phoneNo: "",
          collegeName: "",
          message: ""
        });
        swal({
          title: "Success!",
          text: "Data successfully stored, we'll get back to you soon!",
          icon: "success",
          button: "Okay !",
        });
      } else {
        swal({
          title: " Oops!",
          text: " Please fill out all the required information!",
          icon: "error",
          button: "Back !",
        });
      }
    } else {
      swal({
        title: " Oops!",
        text: " Please fill out all the required information!",
        icon: "error",
        button: "Back !",
      });
    }
  };

  return (
    <section id="Contact">
      <Container>
        <div className='contact_heading_div'>
          <h1 className='contact_us'>Contact Us</h1>
          <h1 className='contact_heading'>Get In <span className='span'> Touch</span></h1>
          <p>Stay Connected With Us</p>
        </div>

        <div className="contact_header">
          <div className='flex2 '>
            <img width={100} height={100} className='mssg_img ' src={''} />
            <a href="mailto:" className='a'>
              <p className='a'>proxy.pvt01@gmail.com</p>
            </a>
          </div>
          <div className=' flex2 '>
            <img width={100} height={100} className='mssg_img ' src={''} />
            <a href="tel:+6494461709" className='a'>
              <p className="a">+91-817133-0405</p>
            </a>

          </div>
          {/* 
    <div className='flex2 ' style={{borderRight:"none"}}>
    <img width={100} height={100} className='mssg_img' src={mssg}/>
    <p>contact@Iteck.com</p>
    </div> */}
        </div>
      </Container>
      <Container className='form_container'>
        <p style={{ textAlign: "center", fontWeight: "", marginBottom: "3.5rem" }}>We will contact again after receive your request in 24h</p>
        <form method="POST">
          <div className='form_wrapper'>
            <Row>
              <Col lg={6} md={12} xs={12} className="col-1">
                <div>
                  <label className='input_lables'>Name</label >
                  <input type="text" className="input_fields" placeholder='Name' id=""
                    name="fname"
                    value={userData.fname}
                    onChange={postUserData}
                  />
                </div>
              </Col >
              <Col lg={6} md={12} xs={12} className="col-2">
                <div>
                  <label className='input_lables'>Email</label >
                  <input className="input_fields" id="" name="email" type="email" placeholder='Email' value={userData.email}
                    onChange={postUserData} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={6} md={12} xs={12} className="col-1" >
                <div >
                  <label className='input_lables' >Mob.No</label >
                  <input className="input_fields" id="" name="phoneNo" type="number" placeholder='Mob.No' value={userData.phoneNo}
                    onChange={postUserData} />
                </div>
              </Col>
              <Col lg={6} md={12} xs={12} className="col-2">
                <div>
                  <label className='input_lables' >College Name</label >
                  <input className="input_fields" id="" name="collegeName" type="text" placeholder='College Name' value={userData.collegeName}
                    onChange={postUserData} />
                </div>
              </Col>
            </Row>

            <Row style={{ display: "grid", justifyContent: "start" }}>
              <div style={{ display: "grid", justifyContent: "start", alignItems: "center" }}>
                <label className='mssg_input_lables' >Message</label >
                <textarea className="mssg_input_fields" id="" name="message" type="text" placeholder='Message' value={userData.message}
                  onChange={postUserData} />
              </div>

            </Row>
            <div className='submit_btndiv'>
              <button className="submit_btn" onClick={submitData} type="submit">Send Your Request</button>
            </div>
          </div>
        </form>


      </Container>
    </section>
  )
}

export default Contact