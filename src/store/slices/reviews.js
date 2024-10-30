/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReviews } = ReviewsSlice.actions;

export const selectReviews = (state) => state?.reviews?.reviews || null;

export default ReviewsSlice.reducer;
