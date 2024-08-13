import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as UserService from "../../service/UserService";
import { useMutationHook } from "../../hooks/useMutationHook";
import { updateUser } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [email, setEmail] = useState(user?.email);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const mutation = useMutationHook((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const { isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      handleGetUserDetail(user?.id, user?.access_token);
      toast.success("Cập nhật thành công!", {
        onClose: () => window.location.reload(),
      });
    }
    if (isError) {
      console.log("error", isError);
    }
  }, [isSuccess, isError]);

  const handleGetUserDetail = async (id, token) => {
    const res = await UserService.getUserDetail(id, token);
    dispatch(updateUser({ ...res.data, access_token: token }));
  };

  useEffect(() => {
    setName(user?.name);
    setAvatar(user?.avatar);
    setPhone(user?.phone);
    setAddress(user?.address);
    setEmail(user?.email);
  }, [user]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result); // Cập nhật ảnh base64 vào state
    };

    if (file) {
      reader.readAsDataURL(file); // Đọc file và chuyển sang base64
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleUpdateUser = () => {
    mutation.mutate({
      id: user?.id,
      name,
      avatar,
      phone,
      address,
      access_token: user?.access_token,
    });
    setIsOpenModal(false);
  };

  return (
    <div className="min-h-[450px] mt-24">
      <div className="max-w-screen-xl mx-auto my-4 bg-white rounded-md">
        <div className="p-8">
          <div className="flex justify-center mt-8">
            <h1 className="text-2xl font-semibold text-mainBlue w-2/12 mt-4">
              Thông tin người dùng
            </h1>
            <div className="w-8/12 border rounded-xl border-gray-300 text-xl">
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <label htmlFor="name" className="text-xl font-semibold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-8/12 p-2 border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <label htmlFor="name" className="text-xl font-semibold">
                  Avatar
                </label>
                <div className="text-left w-8/12 flex flex-row items-center">
                  <input
                    type="file"
                    className="file-input file-input-primary file-input-bordered w-full max-w-xs bg-white"
                    onChange={handleAvatarChange}
                  />
                  {avatar && (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-[60px] h-[60px] rounded-full object-cover ml-6"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <label htmlFor="email" className="text-xl font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  value={email}
                  className="w-8/12 p-2 border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <label htmlFor="phone" className="text-xl font-semibold">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-8/12 p-2 border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <label htmlFor="address" className="text-xl font-semibold">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                  className="w-8/12 p-2 border border-gray-300 rounded-md bg-white"
                />
              </div>
              <div className="flex justify-end items-center p-4">
                <button
                  className="bg-mainBlue text-white p-2 rounded-md w-40"
                  onClick={handleOpenModal}
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpenModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md w-6/12">
              <h2 className="text-3xl font-semibold mb-4">Xác nhận thay đổi</h2>
              <div className="text-2xl">
                <p className="mb-4">Họ và tên: {name}</p>
                <div className="flex flex-row items-center mb-4">
                  <p>Avatar: </p>
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-[60px] h-[60px] rounded-full object-cover ml-6"
                  />
                </div>
                <p className="mb-4">Số điện thoại: {phone}</p>
                <p className="mb-4">Địa chỉ: {address}</p>
                <p className="mb-4 mt-4 text-lg italic">
                  **Để cập nhập thông tin người dùng, nhấn nút đồng ý
                </p>
                <div className="flex justify-end">
                  <button
                    className="bg-gray-400 text-white p-2 rounded-md mr-4 w-36"
                    onClick={() => setIsOpenModal(false)}
                  >
                    Đóng
                  </button>
                  <button
                    className="bg-mainBlue text-white p-2 rounded-md w-36"
                    onClick={handleUpdateUser}
                  >
                    Đồng ý
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProfilePage;
