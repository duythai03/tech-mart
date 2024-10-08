import React, { useState } from "react";
import signIn from "../../assets/images/sign-in.png";
import { Link } from "react-router-dom";
import { validateSignUp } from "../../utils/validation";
import * as UserService from "../../service/UserService";
import { useMutationHook } from "../../hooks/useMutationHook";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutationHook((data) => UserService.signUpUser(data));
  const { data, isPending } = mutation;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateSignUp(email, password, confirmPassword);
    if (error) {
      setError(error);
      return;
    }
    mutation.mutate({ email, password, confirmPassword });
    setError("");
  };
  return (
    <div className="h-screen flex justify-center items-center bg-sign-in-bg bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="w-full md:w-6/12 mx-3 bg-cover bg-center bg-white z-10 rounded-3xl flex">
        <div className="w-full md:w-8/12">
          <div className="p-[40px]">
            <h4 className="text-4xl font-medium mb-3">TechMart xin chào,</h4>
            <p className="text-2xl text-gray-800 mb-5">Đăng ký để tiếp tục</p>
            <form onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2 bg-[#e8f1fe] h-[50px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow text-2xl"
                  placeholder="Nhập Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-[#e8f1fe] h-[50px] mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow text-2xl"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-[#e8f1fe] h-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow text-2xl"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </label>
              {error && <p className="text-red-500 text-md mt-4">{error}</p>}
              {isPending && (
                <div className="text-center mt-6 delay-200">
                  <span className="loading loading-spinner text-info scale-125"></span>
                </div>
              )}
              {data?.status === "ERR" && (
                <p className="text-red-500 text-md mt-4">{data?.message}</p>
              )}
              {data?.status === "OK" && (
                <p className="text-mainBlue text-md mt-4">{data?.message}</p>
              )}
              <button
                type="submit"
                className="btn btn-outline btn-primary w-full h-[50px] text-2xl mt-14"
              >
                Đăng ký
              </button>
            </form>
            <div className="text-xl mt-5">
              <span>Đã có tài khoản?</span>
              <Link to="/sign-in" className=" text-[#3180ff] ml-2">
                Đăng nhập ngay
              </Link>
            </div>
          </div>
        </div>
        <div className="w-4/12 hidden md:flex bg-[#ecf6ff] rounded-3xl justify-center items-center">
          <div className="p-8">
            <img src={signIn} alt="sign in img" className="mb-4" />
            <div className="text-xl flex flex-col justify-center items-center text-mainBlue">
              <p className="font-medium">Mua sắm tại TECHMART</p>
              <p>Siêu ưu đãi mỗi ngày</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
