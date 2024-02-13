import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../features/favourites/favouritesSlice";
import jobsReducer from "../features/jobs/jobsSlice";

export const store = configureStore({
  reducer: {
    favourite: favouritesReducer,
    jobs: jobsReducer,
  },
});
