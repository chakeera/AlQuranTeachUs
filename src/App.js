import React from "react";
import "./assets/styles/App.css";
import theme from "./core/theme";
// import MyRouter from "./router";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <h1>Hello, world!</h1>;
    </ThemeProvider>
  );
}

export default App;
