import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const sidebar = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    updateSide: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default sidebar;
