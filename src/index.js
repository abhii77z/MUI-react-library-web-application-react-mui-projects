import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c3aed", // Vibrant Violet
      light: "#a78bfa",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#db2777", // Deep Pink
      light: "#f472b6",
      dark: "#9d174d",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fff0f3", // Milky rose / soft rose white
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
