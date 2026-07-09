import React from "react";
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
import { Notifications, Settings as SettingsIcon } from "@mui/icons-material";

function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
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
            <Typography variant="h6" fontWeight="600" color="text.primary">
              Developer Dashboard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <IconButton size="small">
                <Notifications />
              </IconButton>
              <IconButton size="small" href="/settings/profile">
                <SettingsIcon />
              </IconButton>
              <Avatar
                sx={{ width: 34, height: 34, ml: 1, bgcolor: "primary.main", fontSize: "0.9rem" }}
                alt="Developer Profile"
              >
                JD
              </Avatar>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
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
  );
}

export default App;
