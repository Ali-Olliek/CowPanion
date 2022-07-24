import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loginRedux: (state, action) => {
      state.user = action.payload;
    },
    logoutRedux: (state) => {
      state.user = null;
    },
  },
});
export const { loginRedux, logoutRedux } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
