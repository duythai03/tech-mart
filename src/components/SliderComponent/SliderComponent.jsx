import React from "react";
import Slider from "react-slick";
import "./Slider.css";

function SliderComponent({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {arrImages.map((image) => {
          return <img src={image} alt="slider" />;
        })}
      </Slider>
    </div>
  );
}

export default SliderComponent;
