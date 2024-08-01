import React, { useState } from "react";
import img1 from "../../assets/images/product-1.webp";
import img2 from "../../assets/images/product-2.webp";
import img3 from "../../assets/images/product-3.webp";
import FiveStarsComponent from "../FiveStarsComponent/FiveStarsComponent";
import { FaPlus, FaMinus } from "react-icons/fa6";

const images = [
  { src: img1, alt: "sản phẩm 1" },
  { src: img2, alt: "sản phẩm 2" },
  { src: img3, alt: "sản phẩm 3" },
];

function ProductDetailComponent() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 100));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white w-full md:w-4/12 mr-4 rounded-lg">
        <div className="p-6">
          <div className="">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="border-[1px] rounded-lg border-lineColor"
            />
          </div>
          <div className="flex mt-4 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`w-[60px] h-[60px] border-[2px] rounded-lg ${
                  selectedImage.src === image.src
                    ? "border-blue-600"
                    : "border-lineColor"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white w-full md:w-8/12 rounded-lg text-2xl">
        <div className="p-8">
          <p className="text-3xl font-semibold">
            Máy Ép Chậm SUNHOUSE MAMA SHD5505 (240W) - Hàng Chính Hãng
          </p>
          <div className="flex text-2xl relative items-center mt-4">
            <span className="mr-2">5.0</span>
            <FiveStarsComponent />
            <div className="ml-6 text-gray-500">(11) | Đã bán 61</div>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-semibold">1.980.000₫</span>
          </div>
          <div className="mt-4 border-b border-gray-300 pb-8">
            <span className="mr-4">
              Giao đến{" "}
              <span className="font-semibold underline cursor-pointer">
                Q.1, P.Bến Nghé, TP.Hồ Chí Minh
              </span>
            </span>
            <span className="font-semibold text-mainBlue cursor-pointer">
              Đổi địa chỉ
            </span>
          </div>
          <div className="mt-4">
            <p>Số lượng</p>
            <div className="mt-2 flex items-center">
              <button
                className="btn btn-outline btn-primary p-2"
                onClick={handleDecrease}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                min={1}
                max={100}
                defaultValue={1}
                value={quantity}
                className="bg-white text-textColor w-[60px] border border-lineColor rounded-md p-2 text-center pl-8 pointer-events-none"
              />
              <button
                className="btn btn-outline btn-primary p-2"
                onClick={handleIncrease}
              >
                <FaPlus />
              </button>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary text-xl h-[4rem] w-[200px] text-white">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
