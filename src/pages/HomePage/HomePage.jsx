import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpeg";
import slider2 from "../../assets/images/slider2.jpeg";
import slider3 from "../../assets/images/slider3.jpeg";

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
    <div className="w-wLap mx-auto text-textColor text-xl">
      <div className="flex items-center gap-24 border-b-[1px] border-lineColor h-[44px]">
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </div>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
    </div>
  );
}

export default HomePage;
