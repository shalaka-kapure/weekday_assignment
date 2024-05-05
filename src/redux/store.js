import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./JobReducer";

const store = configureStore({
  reducer: {
    job: JobReducer,
  },
});
export default store;
