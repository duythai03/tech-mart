import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpeg";
import slider2 from "../../assets/images/slider2.jpeg";
import slider3 from "../../assets/images/slider3.jpeg";
import CardComponent from "../../components/CardComponent/CardComponent";

function HomePage() {
  const arr = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Accessories",
    "Audio",
    "Camera",
    "Smartwatch",
    "TV",
    "Monitor",
    "PC",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 text-textColor bg-white text-base sm:text-xl mt-4 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-24 h-[44px]">
        {arr.map((item) => (
          <TypeProduct
            name={item}
            key={item}
            className="text-sm sm:text-base"
          />
        ))}
      </div>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center mt-4 gap-y-6">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-primary w-96 text-xl my-4 h-[4rem]">
          Xem thêm...
        </button>
      </div>
    </div>
  );
}

export default HomePage;
