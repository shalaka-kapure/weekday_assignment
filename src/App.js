import * as React from "react";
import "./styles/App.css";
import Box from "@mui/material/Box";
import Topbar from "./components/topBar";
import CardContainer from "./components/cardContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        className="main-container"
      >
        <Topbar />
        <CardContainer />
      </Box>
    </Provider>
  );
}

export default App;
