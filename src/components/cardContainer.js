import React, { useEffect } from "react";
import CardComponent from "./card";
import { Grid } from "@mui/material";
import { fetchJobs } from "../redux/JobReducer";
import { useDispatch, useSelector } from "react-redux";

function CardContainer() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs.jdList);
  console.log("data from cardContainer", jobs);

  useEffect(() => {
    dispatch(fetchJobs({ limit: 50, offset: 0 }));
  }, [dispatch]);

  return (
    <Grid container spacing={0} className="card-container">
      {jobs && jobs.map((job) => ( 
        <Grid key={job.jdUid} item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
          <CardComponent job={job}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardContainer;
