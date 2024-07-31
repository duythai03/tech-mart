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
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {arrImages.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt="slider"
              className="w-full h-[200px] sm:h-[250px] md:h-[460px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
