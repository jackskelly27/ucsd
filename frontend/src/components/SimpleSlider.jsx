import React from "react";
import Slider from "react-slick";

export function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="container3">
    <Slider {...settings}>
      <div>
        <img src="RotatingImage1.png" alt="Woman walking on beach." height="280px"/>
      </div>
      <div>
        <img src="RotatingImage2.png" alt="Women exercising." height="280px" />
      </div>
      <div>
        <img src="RotatingImage3.png" alt="Group practicing yoga." height="280px" />
      </div>
      <div>
        <img src="RotatingImage4.png" alt="Basketball court." height="280px" />
      </div>
      <div>
        <img src="RotatingImage5.png" alt="Woman and man walking on beach." height="280px" />
      </div>
    </Slider>
    </div>
  );
};

export default SimpleSlider;