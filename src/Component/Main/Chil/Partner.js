import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Partner = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
     <>
     <div class="d-flex justify-content-center font-weight-bold"><h2 style={{fontWeight:'1'}}>Đối tác</h2></div>
      <div class="container-fluit bg-partner w-100 mb-5" >
        <div class="container">
        <Slider {...settings}>
          <div class="d-flex justify-content-center">
          <img src="assets\images\partner1.png" class="d-block  img-partner" alt="..." />
          </div>
          <div  class=" d-flex justify-content-center">
          <img src="assets\images\partner2.png" class="d-block img-partner" alt="..." />
          </div>
          <div class=" d-flex justify-content-center">
          <img src="assets\images\partner3.png" class="d-block img-partner" alt="..." />
          </div>
          <div class=" d-flex justify-content-center">
          <img src="assets\images\partner1.png" class="d-block img-partner" alt="..." />
          </div>
          <div class=" d-flex justify-content-center">
          <img src="assets\images\partner1.png" class="d-block img-partner" alt="..." />
          </div>
          <div class=" d-flex justify-content-center">
          <img src="assets\images\partner1.png" class="d-block img-partner" alt="..." />
          </div>

        </Slider>
        </div>
      </div>
     </>
    );
  }