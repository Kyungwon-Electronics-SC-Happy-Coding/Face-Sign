import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isLogin: false,
    accessToken: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload.accessToken;
      return state;
    },
    clearUser: (state) => {
      state.isLogin = false;
      state.accessToken = "";
      return state;
    },
  },
});

export const { loginUser, clearUser } = userAuthSlice.actions;
