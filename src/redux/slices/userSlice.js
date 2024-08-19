import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    address: "Tp. Hồ Chí Minh, Việt Nam",
    avatar: "",
    access_token: "",
    id: "",
    isAdmin: false,
  },
  reducers: {
    updateUser: (state, action) => {
      const {
        name,
        email,
        access_token,
        address,
        avatar,
        phone,
        _id,
        isAdmin,
      } = action.payload;
      console.log("action", action);
      state.name = name || "User";
      state.email = email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
      state.access_token = access_token;
      state.id = _id;
      state.isAdmin = isAdmin;
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
      state.avatar = "";
      state.access_token = "";
      state.id = "";
      state.isAdmin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
