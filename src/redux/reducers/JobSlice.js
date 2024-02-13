import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    jobsLoading: (state) => {
      state.loading = true;
    },
    jobsReceived: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    jobsFetchFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { jobsLoading, jobsReceived, jobsFetchFailed } = jobsSlice.actions;
export default jobsSlice.reducer;
