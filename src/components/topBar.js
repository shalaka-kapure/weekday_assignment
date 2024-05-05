import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

function Topbar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} lg={1.2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Roles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            labelPlacement="end"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4} lg={1.2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4} lg={1.5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4} lg={1.5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tech Stack</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4} lg={2.2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Minimum Base Pay Salary
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4} lg={1.2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Remote</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            endAdornment={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <TextField
          id="outlined-basic"
          label="Search Company Name"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

export default Topbar;
