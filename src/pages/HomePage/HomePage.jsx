import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";

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
      <div className="">HomePage</div>
    </div>
  );
}

export default HomePage;
