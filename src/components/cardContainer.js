import React from "react";
import CardComponent from "./card";
import { Grid } from "@mui/material";

function CardContainer() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} sx={{ marginTop: "25px" }}>
        <CardComponent />
      </Grid>
    </Grid>
  );
}

export default CardContainer;
