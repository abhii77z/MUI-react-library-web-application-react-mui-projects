import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Abhijith Chandran",
    email: "abhijith.chandran@example.com",
    role: "Full Stack Developer",
    bio: "Passionate Full Stack Developer who loves building modern web applications using React, Node.js, and Python. Open to collaborating on open-source projects.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Profile saved successfully! (Simulation)");
  };

  return (
    <Box sx={{ maxWidth: 850, margin: "0 auto" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Profile Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Update your public profile information, avatar image, and bio.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Avatar Sidebar Panel */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ borderRadius: 3, textAlign: "center", p: 3 }}>
            <CardContent>
              <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
                <Avatar
                  sx={{ width: 110, height: 110, bgcolor: "primary.main", fontSize: "2.5rem", mx: "auto" }}
                >
                  {profile.name.split(" ").map(n => n[0]).join("")}
                </Avatar>
              </Box>
              <Typography variant="h6" fontWeight="bold">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {profile.role}
              </Typography>
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
                size="small"
                sx={{ borderRadius: 2 }}
              >
                Upload Photo
                <input hidden accept="image/*" type="file" />
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Info Form Panel */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Role / Title"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Biography"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    px: 4,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: "bold",
                    backgroundColor: "#1565c0",
                    "&:hover": { backgroundColor: "#0d47a1" },
                  }}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
