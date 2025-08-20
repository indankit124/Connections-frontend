import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: {
    info: null,
  },
  reducers: {
    addInfo: (state, action) => {
      state.info = action.payload;
    },
    clearLoggedInInfo: (state) => {
      state.info = null;   // ✅ safer than .length=0
    },
    updateInfo: (state, action) => {
      if (state.info) {
        state.info = { ...state.info, ...action.payload }; // ✅ merge updates
      } else {
        state.info = action.payload; // if null, set fresh
      }
    },
  },
});

export default loginInfoSlice.reducer;
export const { addInfo, clearLoggedInInfo, updateInfo } = loginInfoSlice.actions;
