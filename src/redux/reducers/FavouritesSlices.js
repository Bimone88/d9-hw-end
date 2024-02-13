import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourite",
  initialState: {
    list: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromFavourite: (state, action) => {
      state.list = state.list.filter((item) => item !== action.payload);
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
