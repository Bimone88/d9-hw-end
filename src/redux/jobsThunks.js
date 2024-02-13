import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobsLoading, jobsReceived, jobsFetchFailed } from "./jobsSlice";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (params, { dispatch }) => {
    dispatch(jobsLoading());
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?${params}`
      );
      const data = await response.json();
      if (response.ok) {
        dispatch(jobsReceived(data));
      } else {
        dispatch(jobsFetchFailed("Failed to fetch jobs"));
      }
    } catch (error) {
      dispatch(jobsFetchFailed(error.toString()));
    }
  }
);
