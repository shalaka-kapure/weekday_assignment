import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//fetching the dynamic data
export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit, offset }),
        }
      );

      const data = await response.json();
      // console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    filteredJobs: [],
    status: "idle",
    error: null,
    filters: {
      role: null,
      location: null,
      experience: null,
      techStack: null,
      remote: null,
      minSalary: null,
      search: null,
    },
    isLoading: false,
  },
  reducers: {
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters = {
        ...state.filters, 
        [filterType]: value 
      };
      state.filteredJobs = applyFilters(state.jobs, state.filters); 
    },  
  },
  extraReducers: (builder) => {
        builder
          .addCase(fetchJobs.pending, (state, action) => {
            state.isLoading = true;
          })
          .addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = action.payload;
            state.filteredJobs = applyFilters(state.jobs, state.filters);
          })          
          .addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
});

//helper function for filtering 
const applyFilters = (jobs, filters) => {
  return jobs.jdList.filter(job => {
    return (
      (filters.role === null || job.jobRole === filters.role) &&
      (filters.location === null || job.location === filters.location) &&
      (filters.experience === null || job.minExp >= filters.experience) &&
      (filters.techStack === null || job.jobRole === filters.techStack) &&
      (filters.remote === null || (filters.remote === "remote" ? job.location === "remote" : job.location !== "remote")) &&
      (filters.minSalary === null || job.minJdSalary >= filters.minSalary) &&
      (filters.search === null || job.companyName.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });
};

export const {
  setFilter,
} = jobSlice.actions;

export default jobSlice.reducer;
