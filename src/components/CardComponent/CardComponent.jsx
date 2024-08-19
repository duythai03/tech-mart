import React from "react";
import official from "../../assets/images/official.png";
import FiveStarsComponent from "../FiveStarsComponent/FiveStarsComponent";

function CardComponent(props) {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
  } = props;
  return (
    <div className="card bg-white w-[17rem] sm:w-[22rem] shadow-lg border-[1px] border-lineColor hover:shadow-2xl group relative">
      <a href="/">
        <img
          src={official}
          alt="official"
          className="absolute top-0 left-0 w-[80px] h-[16px] z-10 rounded-tl-lg"
        />
        <figure className="h-[17rem] sm:h-[20rem]">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="h-[17rem] sm:h-[20rem] group-hover:brightness-[1.03] rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2 text-2xl font-normal">
            {name}
          </h2>
          <FiveStarsComponent rating={rating} />
          <div className="text-[#ff4759] font-semibold">
            <span className=" text-3xl">
              {((price * (100 - discount)) / 100).toLocaleString("vi-VN")}
            </span>
            <span className="text-base">₫</span>
          </div>
          <div className="">
            <div className="px-2 bg-[#f5f5fa] inline-block rounded-xl">
              -{discount}%
            </div>
            <span className="line-through">
              {price.toLocaleString("vi-VN")}
            </span>
            <span className="text-base">₫</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardComponent;
