import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    address: "",
    access_token: "",
    id: "",
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, email, access_token, address, phone, _id } = action.payload;
      console.log("action", action);
      state.name = name || "User";
      state.email = email;
      state.phone = phone || "";
      state.address = address || "Tp. Hồ Chí Minh, Việt Nam";
      state.access_token = access_token;
      state.id = _id || "";
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
      state.access_token = "";
      state.id = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
