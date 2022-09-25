import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  active: null,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;

export default galleryReducer;
