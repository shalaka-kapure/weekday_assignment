import React, { useEffect, useState } from "react";
import CardComponent from "./card";
import { Grid, Typography } from "@mui/material";
import { fetchJobs } from "../redux/JobReducer";
import { useDispatch, useSelector } from "react-redux";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import Loader from "./Loader";

function CardContainer() {
  const dispatch = useDispatch();
  const filteredJobs = useSelector((state) => state.job.filteredJobs);
  const isLoading = useSelector((state) => state.job.isLoading);
  const [page, setPage] = useState(1);
  const [noJobsMessageDisplayed, setNoJobsMessageDisplayed] = useState(false);

  //infinite scrolling and dispatch logic 
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    if (!isLoading && !filteredJobs && !noJobsMessageDisplayed) {
      dispatch(fetchJobs({ limit: 50, offset: (page - 1) * 50 }));
    }

    if (!isLoading && filteredJobs.length === 0) {
      setNoJobsMessageDisplayed(false);
    } else {
      setNoJobsMessageDisplayed(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, isLoading, page, filteredJobs, noJobsMessageDisplayed]);

  const newFilteredJobs = [...filteredJobs];
  console.log("filtered", newFilteredJobs);

  return (
    <Grid container spacing={0} className="card-container">
      {newFilteredJobs.map((job) => (
        <Grid
          key={job.jdUid}
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{ marginTop: "25px" }}
        >
          <CardComponent job={job} />
        </Grid>
      ))}
      {isLoading && (
        <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
          <Loader />
        </Grid>
      )}
      {!isLoading && newFilteredJobs.length === 0 && (
        <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
          <SearchOffIcon sx={{ fontSize: 100 }}/>
          <Typography variant="h6">
            Oops, No Jobs available for this category at the moment
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default CardContainer;
