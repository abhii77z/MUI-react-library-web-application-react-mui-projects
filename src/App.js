import React, { useState, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Help from "./pages/Help";
import { Box, AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import { Notifications, Settings as SettingsIcon, Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#7c3aed" : "#a78bfa", // Violet
            light: "#a78bfa",
            dark: "#5b21b6",
            contrastText: "#ffffff",
          },
          secondary: {
            main: mode === "light" ? "#db2777" : "#f472b6", // Pink
            light: "#f472b6",
            dark: "#9d174d",
            contrastText: "#ffffff",
          },
          background: {
            default: mode === "light" ? "#fff0f3" : "#121212", // Milky Rose vs pure dark
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <AppBar
            position="static"
            color="inherit"
            elevation={0}
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" fontWeight="600" color="text.primary">
                  Developer Dashboard
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <IconButton size="small" onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">
                  {mode === "light" ? <DarkMode /> : <LightMode />}
                </IconButton>
                <IconButton size="small">
                  <Notifications />
                </IconButton>
                <IconButton size="small" href="/settings/profile">
                  <SettingsIcon />
                </IconButton>
                <Avatar
                  sx={{ width: 34, height: 34, ml: 1, bgcolor: "primary.main", fontSize: "0.9rem", color: "primary.contrastText" }}
                  alt="Developer Profile"
                >
                  AC
                </Avatar>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ flexGrow: 1, p: { xs: 2.5, md: 4 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings/profile" element={<Profile />} />
              <Route path="/settings/security" element={<Security />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
