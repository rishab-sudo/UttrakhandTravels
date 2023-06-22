import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Service.css';
import { dataDigitalBestSeller } from './ServiceData';


function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3, 
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: '',
    }));
  };

  return (
    <section id="Service">
      <h1 className='service_heading'>Our Services</h1>
    <div className="main_wrap">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="cardd">
            <div className="card_top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card_bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default App;