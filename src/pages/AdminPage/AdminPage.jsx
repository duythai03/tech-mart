import React, { useState } from "react";
import { FaRegUser, FaCartFlatbed } from "react-icons/fa6";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import UserControl from "./UserControl";
import ProductControl from "./ProductControl";

function AdminPage() {
  const [activeUserList, setActiveUserList] = useState(false);
  const [activeProductList, setActiveProductList] = useState(false);

  const handleActiveUserList = () => {
    setActiveUserList(true);
    setActiveProductList(false);
  };
  const handleActiveProductList = () => {
    setActiveUserList(false);
    setActiveProductList(true);
  };

  return (
    <div className="">
      <HeaderComponent />
      <div className="flex max-w-screen-xl mx-auto mt-4 min-h-[650px]">
        <div className="w-3/12 mr-4">
          <ul className="rounded-box w-full text-2xl bg-white">
            <li
              className={`py-6 hover:bg-blue-100 hover:text-mainBlue cursor-pointer ${
                activeUserList
                  ? " text-mainBlue border-r-[3px] border-mainBlue"
                  : ""
              }`}
              onClick={handleActiveUserList}
            >
              <span className="flex items-center ml-8 gap-4">
                <FaRegUser /> Người dùng
              </span>
            </li>
            <li
              className={`py-6 hover:bg-blue-100 hover:text-mainBlue cursor-pointer ${
                activeProductList
                  ? " text-mainBlue border-r-[3px] border-mainBlue"
                  : ""
              }`}
              onClick={handleActiveProductList}
            >
              <span className="flex items-center ml-8 gap-4">
                <FaCartFlatbed /> Sản phẩm
              </span>
            </li>
          </ul>
        </div>
        <div className="w-9/12 bg-white rounded-xl">
          {activeUserList && <UserControl />}
          {activeProductList && <ProductControl />}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
