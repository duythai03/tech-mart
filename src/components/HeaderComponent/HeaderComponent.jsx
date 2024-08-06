import React from "react";
import {
  FaMagnifyingGlass,
  FaRegUser,
  FaCaretDown,
  FaCartShopping,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="bg-mainBlue text-white">
      <div className="flex justify-center items-center mx-auto py-[10px] w-full max-w-screen-xl px-[10px] sm:px-0">
        <Link to="/" className="w-3/12 text-4xl font-bold">
          TECHMART
        </Link>

        <div className="w-6/12">
          <label className="input input-bordered flex items-center gap-2 bg-white text-textColor text-xl pl-[10px] pr-0 h-[34px]">
            <input type="text" className="grow" placeholder="Tìm kiếm" />
            <kbd className="  text-gray-500 text-2xl h-full px-4 flex items-center rounded-md hover:bg-[#cee1ff]">
              <FaMagnifyingGlass />
            </kbd>
          </label>
        </div>

        <div className="w-3/12 flex items-center justify-end">
          <div className="flex items-center ml-4">
            <i className="text-5xl p-3">
              <FaRegUser />
            </i>
            <div className="flex flex-col text-xl">
              <Link to="/sign-in">Đăng nhập/Đăng ký</Link>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-mainBlue text-white border-0 hover:bg-mainBlue text-2xl p-0"
                >
                  Tài khoản <FaCaretDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white text-black text-xl"
                >
                  <li>
                    <a href="/">Item 1</a>
                  </li>
                  <li>
                    <a href="/">Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <i className="text-5xl ml-9">
            <FaCartShopping />
          </i>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
