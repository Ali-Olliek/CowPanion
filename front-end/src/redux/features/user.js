import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const deleteData = async () => {
  await AsyncStorage.removeItem("userData");
};

export const { loginRedux, logoutRedux } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
