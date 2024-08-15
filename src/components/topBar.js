import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setFilter } from "../redux/JobReducer";

function Topbar() {
  const dispatch = useDispatch();
  const [jobRoles, setJobRoles] = useState([]);
  const [jobTech, setJobTech] = useState([]);
  const [locations, setLocations] = useState([]);

  const filters = useSelector((state) => state.job.filters);
  // console.log("filters", filters);

  const handleFilterChange = (filterType) => (event) => {
    const { value } = event.target;
    dispatch(setFilter({ filterType, value }));
  };

  //setting the jobs, location and tech stack filter values
  useEffect(() => {
    dispatch(fetchJobs({ limit: 50, offset: 0 })).then((data) => {
      if (Array.isArray(data.payload.jdList)) {
        const roles = new Set();
        data.payload.jdList.forEach((job) => {
          roles.add(job.jobRole);
        });
        setJobRoles(Array.from(roles));
        setJobTech(Array.from(roles));
        const joblocations = new Set();
        data.payload.jdList.forEach((job) => {
          joblocations.add(job.location);
        });
        setLocations(Array.from(joblocations));
      } else {
        console.error("Data payload is not an array:", data.payload.jdList);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2}>
      {/* Roles filter */}
      <Grid item xs={6} md={1.4}>
        <FormControl fullWidth>
          <InputLabel id="role-label">Roles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.role || ""}
            onChange={handleFilterChange("role")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            label="Roles"
            IconComponent={KeyboardArrowDownIcon}
          >
            {jobRoles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* Location filter */}
      <Grid item xs={6} md={1.4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.location || ""}
            label="Age"
            onChange={handleFilterChange("location")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* Experience filter */}
      <Grid item xs={6} md={1.5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.experience || ""}
            label="Age"
            onChange={handleFilterChange("experience")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={1}>1 years</MenuItem>
            <MenuItem value={2}>2 years</MenuItem>
            <MenuItem value={3}>3 years</MenuItem>
            <MenuItem value={4}>4 years</MenuItem>
            <MenuItem value={5}>5 years</MenuItem>
            <MenuItem value={6}>6 years</MenuItem>
            <MenuItem value={7}>7 years</MenuItem>
            <MenuItem value={8}>8 years</MenuItem>
            <MenuItem value={9}>9 years</MenuItem>
            <MenuItem value={10}>10 years</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Techstack filter */}
      <Grid item xs={6} md={1.5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tech Stack</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.techStack || ""}
            label="Age"
            onChange={handleFilterChange("techStack")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            {jobTech.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* Min. base salary filter */}
      <Grid item xs={6} md={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Min. Base Pay Salary
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.minSalary || ""}
            label="Age"
            onChange={handleFilterChange("minSalary")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
            <MenuItem value={90}>90</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Remote filter  */}
      <Grid item xs={6} md={1.4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Remote</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.remote || ""}
            label="Age"
            onChange={handleFilterChange("remote")}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={"remote"}>Remote</MenuItem>
            <MenuItem value={"onsite"}>On-site</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Search  */}
      <Grid item xs={12} md={2}>
        <TextField
          id="outlined-basic"
          label="Search Company Name"
          variant="outlined"
          value={filters.search || ""}
          onChange={handleFilterChange("search")}
        />
      </Grid>
    </Grid>
  );
}

export default Topbar;
