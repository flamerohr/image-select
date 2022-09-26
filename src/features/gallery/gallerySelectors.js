import { createSelector } from "@reduxjs/toolkit";

export const getGalleryRoot = (state) => state.gallery;

export const getActive = createSelector(
  getGalleryRoot,
  (state) => state.active
);
