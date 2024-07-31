import React from "react";
import { FaStar } from "react-icons/fa6";
import official from "../../assets/images/official.png";

function CardComponent() {
  return (
    <div className="card bg-white w-[22rem] shadow-lg border-[1px] border-lineColor hover:shadow-2xl group relative">
      <a href="/">
        <img
          src={official}
          alt="official"
          className="absolute top-0 left-0 w-[80px] h-[16px] z-10 rounded-tl-lg"
        />
        <figure className="h-[19rem]">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="h-[19rem] group-hover:brightness-[1.03] rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2 text-2xl font-normal">
            Giày Adidas hàng hiệu xịn xò con bò
          </h2>
          <i className="flex text-[#ffc400] text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </i>
          <div className="text-[#ff4759] font-semibold">
            <span className=" text-3xl">190.000</span>
            <span className="text-base">₫</span>
          </div>
          <div className="">
            <div className="px-2 bg-[#f5f5fa] inline-block rounded-xl">
              -28%
            </div>
            <span className="line-through">290.000</span>
            <span className="text-base">₫</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardComponent;
