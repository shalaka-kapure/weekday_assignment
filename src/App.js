import * as React from "react";
import "./styles/App.css";
import Box from "@mui/material/Box";
import Topbar from "./components/topBar";
import CardContainer from "./components/cardContainer";

function App() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      className="main-container"
    >
      <Topbar />
      <CardContainer />
    </Box>
  );
}

export default App;
