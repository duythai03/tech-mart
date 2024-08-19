import React from "react";
import { FaStar } from "react-icons/fa6";

function FiveStarsComponent({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`text-xl ${
          i <= rating ? "text-[#ffc400]" : "text-gray-300"
        }`}
      />
    );
  }

  return <i className="flex">{stars}</i>;
}

export default FiveStarsComponent;
